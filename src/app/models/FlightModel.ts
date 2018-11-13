export interface Result {
    destination: string;
    departure_date: string;
    return_date: string;
    price: string;
    airline: string;
}

export interface FlightModel {
    origin: string;
    currency: string;
    results: Result[];
}
