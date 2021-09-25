import { CircularProgress, Grid } from "@mui/material";
import React, { Component } from "react";
import { fetchData, fetchToday, fetchZipCode } from "./api";
import AppTopBar from "./components/AppTopBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherCard from "./components/WeatherCard";

interface Props {}
interface State {
  location: any;
  zip_code: number;
  searchDialogVisibility: boolean;
  data: any;
  todayData: any;
  appLoading: boolean;
}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      zip_code: 94588,
      location: "",
      searchDialogVisibility: false,
      data: [],
      todayData: "",
      appLoading: false,
    };
  }

  async componentDidMount() {
    // navigator.geolocation.getCurrentPosition(async (position) => {
    //     const fetchZipCodeData = await fetchLatLongCode(
    //       position.coords.latitude,
    //       position.coords.longitude
    //     );
    const fetchZipCodeData = await fetchZipCode(Number(this.state.zip_code));
    this.setState({ location: fetchZipCodeData });
    this.handleZipCodeChange(this.state.zip_code);
  }

  handleSearchLocationDialog = () => {
    this.setState({
      searchDialogVisibility: !this.state.searchDialogVisibility,
    });
  };

  handleZipCodeChange = async (zip: number) => {
    // If zipcode changes, fetch the weather data again
    const fetchedData = await fetchData(Number(zip));
    const todayData = await fetchToday(Number(zip));

    // If data is undefined
    if (!todayData || !fetchedData) {
      this.setState({ appLoading: true });
    }

    // Add the data for today with the forecast
    // as forecast data excludes data for the present day
    //@ts-ignore
    // const allData = todayData.concat(fetchedData.futuredays);

    this.setState({
      //@ts-ignore
      data: fetchedData.futuredays,
      //@ts-ignore
      todayData: todayData[0],
      appLoading: false,
    });
  };

  handleUpdateZipCodeSubmit = async () => {
    const validation = await fetchZipCode(this.state.zip_code);
    if (validation !== "Error") {
      this.handleZipCodeChange(this.state.zip_code);
      this.handleSearchLocationDialog();
      if (this.state.zip_code.toString().length === 5) {
        const fetchZipCodeData = await fetchZipCode(
          Number(this.state.zip_code)
        );
        this.setState({ location: fetchZipCodeData });
      }
    }
  };

  zipCodeChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    var zip = parseInt(event.target.value, 10);
    this.setState({ zip_code: zip });
  };

  render() {
    if (this.state.appLoading) {
      return <CircularProgress />;
    }

    return (
      <div className="weather">
        <div className="container">
          <AppTopBar
            location={this.state?.location}
            searchDialogVisibility={this.state.searchDialogVisibility}
            handelSearchDialogChange={this.handleSearchLocationDialog.bind(
              this
            )}
            zip_code={this.state.zip_code}
            onChangeZipCode={this.zipCodeChange}
            onSubmit={this.handleUpdateZipCodeSubmit}
          />
          {this.state.todayData ? (
            <CurrentWeather weather={this.state.todayData} />
          ) : null}
          <WeatherCard weather={this.state?.data} />
        </div>
      </div>
    );
  }
}
