export interface Provider {
    company_code: string;
    company_name: string;
}

export interface Location {
    latitude: number;
    longitude: number;
}

export interface Address {
    line1: string;
    city: string;
    region: string;
    country: string;
}

export interface VehicleInfo {
    acriss_code: string;
    transmission: string;
    fuel: string;
    category: string;
    type: string;
    air_conditioning?: boolean;
}

export interface Price {
    amount: string;
    currency: string;
}

export interface Rate {
    type: string;
    price: Price;
}

export interface Image {
    category: string;
    width: number;
    height: number;
    url: string;
}

export interface EstimatedTotal {
    amount: string;
    currency: string;
}

export interface Car {
    vehicle_info: VehicleInfo;
    rates: Rate[];
    images: Image[];
    estimated_total: EstimatedTotal;
}

export interface Result {
    provider: Provider;
    location: Location;
    airport: string;
    address: Address;
    cars: Car[];
}

export interface CarModel {
    results: Result[];
}
