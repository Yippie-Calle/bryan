export interface Weather {
  id: string;
  location: {
    lat: number;
    lon: number;
    name: string;
    country: string;
    localtime: string;
  };
  climate: {
    last_updated: string;
    tempC: number;
    tempF: number;
    windMPH: number;
    windKPH: number;
    humidity: number;
    cloud: number;
  };
}
