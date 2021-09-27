export interface LocationModel {
    City: string
    State: string
    Latitude: string
    Longitude: string
    ZipCode: string
    County: string
}

export interface WeatherModel {
    date: string
    description: string
    feels_like: string
    icon: string
    main: string
}