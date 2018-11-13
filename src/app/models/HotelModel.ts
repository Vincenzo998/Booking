export interface Location {
    latitude: number;
    longitude: number;
}

export interface Address {
    line1: string;
    city: string;
    region: string;
    postal_code: string;
    country: string;
}

export interface TotalPrice {
    amount: string;
    currency: string;
}

export interface MinDailyRate {
    amount: string;
    currency: string;
}

export interface Contact {
    type: string;
    detail: string;
}

export interface Amenity {
    amenity: string;
    ota_code: number;
    description: string;
}

export interface Award {
    provider: string;
    rating: string;
}

export interface Image {
    category: string;
    width: number;
    height: number;
    url: string;
}

export interface TotalAmount {
    amount: string;
    currency: string;
}

export interface Rate {
    start_date: string;
    end_date: string;
    currency_code: string;
    price: number;
}

export interface RoomTypeInfo {
    room_type: string;
    bed_type: string;
    number_of_beds: string;
}

export interface Room {
    booking_code: string;
    room_type_code: string;
    rate_plan_code: string;
    total_amount: TotalAmount;
    rates: Rate[];
    descriptions: string[];
    room_type_info: RoomTypeInfo;
    rate_type_code: string;
}

export interface MoreRoomsAtThisHotel {
    href: string;
}

export interface Links {
    more_rooms_at_this_hotel: MoreRoomsAtThisHotel;
}

export interface Result {
    property_code: string;
    property_name: string;
    location: Location;
    address: Address;
    total_price: TotalPrice;
    min_daily_rate: MinDailyRate;
    contacts: Contact[];
    amenities: Amenity[];
    awards: Award[];
    images: Image[];
    rooms: Room[];
    _links: Links;
}

export interface HotelModel {
    results: Result[];
}

