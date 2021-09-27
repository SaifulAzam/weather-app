import { LocationModel, WeatherModel } from "../model";
import * as React from "react";
import { fetchData, fetchToday, fetchZipCode } from "../api";

interface AppContextState {
  location: LocationModel | undefined;
  zipCode: number | undefined;
  updateZipCode: (zip: number | undefined) => void;
  forecastWeatherData: WeatherModel[];
  todayWeatherData: WeatherModel | undefined;
}

type WeatherProviderProps = { children: React.ReactNode };

export const WeatherAppContext = React.createContext<
  AppContextState | undefined
>(undefined);

const AppProvider = ({ children }: WeatherProviderProps) => {
  const [zipCode, setZipCode] = React.useState<number | undefined>(undefined);
  const [location, setLocation] = React.useState<LocationModel | undefined>(
    undefined
  );

  const [currentWeatherData, setCurrentWeatherData] = React.useState<
    WeatherModel | undefined
  >(undefined);
  const [forecastWeatherData, setForecastWeatherData] = React.useState<
    WeatherModel | []
  >([]);

  const updateZipCode = (zip: number | undefined) => {
    setZipCode(zip);
    updateLocation(zip);
  };
  const callBack = React.useCallback(() => {
    updateZipCode(zipCode);
  }, [zipCode]);

  React.useEffect(() => {
    if (!location) {
      updateLocation(Number(process.env.REACT_APP_DEFAULT_ZIP_CODE));
    }
  }, [updateZipCode, zipCode, callBack]);

  const updateLocation = async (zipCode: number | undefined) => {
    const zipCodeData = await fetchZipCode(Number(zipCode));
    const todayWeatherData = await fetchToday(Number(zipCode));
    const fetchWeatherData = await fetchData(Number(zipCode));

    setLocation(zipCodeData);
    //@ts-ignore
    setCurrentWeatherData(todayWeatherData[0]);
    //@ts-ignore
    setForecastWeatherData(fetchWeatherData);
  };

  return (
    <WeatherAppContext.Provider
      value={{
        location,
        zipCode,
        updateZipCode,
        currentWeatherData,
        //@ts-ignore
        forecastWeatherData,
      }}
    >
      {children}
    </WeatherAppContext.Provider>
  );
};

export default AppProvider;
