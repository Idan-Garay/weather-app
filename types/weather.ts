export type Weather = {
    coord: {
        lon: number;
        lat: number;
    }
    weather: {
        id: string;
        main: string;
        description: string;
        icon: string;
    }
    base: any
    main: {
        temp: string
        feels_like: string;
        pressure: string;
        humidity: string;
        temp_min: string;
        temp_max: string;
        sea_level: string;
        grnd_level: string;
    }
    visibility:  string;
    wind: {
        speed: string;
        deg: string;
        gust: string;
    }
    clouds: {
        cloudiness: string;
    }
    rain:  {
        "1h": string; // (where available) Rain volume for the last 1 hour, mm. Please note that only mm as units of measurement are available for this parameter
        "3h": string;
    }   
    snow: {
        "1h": string; //(where available) Snow volume for the last 1 hour, mm. Please note that only mm as units of measurement are available for this parameter
        "3h": string;
    }
    dt: string
    
}