export interface Service {
    destination_station_id: string;
    departure_times: string[];
}

export interface Result {
    origin_station_id: string;
    date: string;
    services: Service[];
}

export interface TrainModel {
    results: Result[];
}
