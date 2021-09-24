import * as React from "react";

type Action = { type: "zipCode" };
type Dispatch = (action: Action) => void;
type State = {
  zipCode: number;
};

type WeatherProviderProps = { children: React.ReactNode };

const WeatherStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function weatherReducer(state: State, action: Action) {
  switch (action.type) {
    case "zipCode": {
      return { zipCode: state.zipCode };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function WeatherProvider({ children }: WeatherProviderProps) {
  const [state, dispatch] = React.useReducer(weatherReducer, {
    zipCode: 10461,
  });
  const value = { state, dispatch };

  return (
    <WeatherStateContext.Provider value={value}>
      {children}
    </WeatherStateContext.Provider>
  );
}

function useWeather() {
  const context = React.useContext(WeatherStateContext);
  if (context === undefined) {
    throw new Error("useZipCode must be used within a WeatherProvider");
  }

  return context;
}

export { WeatherProvider, WeatherStateContext, useWeather };
