import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Models

import { FlightModel } from 'src/app/models/FlightModel';
import { HotelModel } from 'src/app/models/HotelModel';
import { TrainModel } from 'src/app/models/TrainModel';
import { CarModel } from 'src/app/models/CarModel';


@Injectable()
export class RequestService {

  constructor(private http: HttpClient) {}

  getFlightExtensiveSearch(flightModel: any) {
    let queryStringUrl = 'https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=HWT1eB0BGaZoU5UJxPr8a0GAhW9RBmfA&origin='
    + flightModel.origin + '&destination=' + flightModel.destination;
     queryStringUrl = flightModel.departure_date ? queryStringUrl += '&departure_date=' + flightModel.departure_date : queryStringUrl;
    return this.http.get<FlightModel>(queryStringUrl);
  }

  getHotelAirportSearch(hotelModel: any) {
    return this.http.
    get<HotelModel>('https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?apikey=HWT1eB0BGaZoU5UJxPr8a0GAhW9RBmfA&location='
    + hotelModel.location + '&check_in=' + hotelModel.start_date + '&check_out=' + hotelModel.end_date );
  }

  getTrainScheduleSearch(trainModel: any) {
    return this.http.
    get<TrainModel>('https://api.sandbox.amadeus.com/v1.2/trains/schedule-search?apikey=HWT1eB0BGaZoU5UJxPr8a0GAhW9RBmfA&origin='
     + trainModel.origin + '&departure_date=' + trainModel.departure_date );
  }

  getCarRentalAirportSearch(carModel: any) {
    return this.http.
    get<CarModel>('https://api.sandbox.amadeus.com/v1.2/cars/search-airport?apikey=HWT1eB0BGaZoU5UJxPr8a0GAhW9RBmfA&location='
     + carModel.location + '&pick_up=' + carModel.pick_up + '&drop_off=' + carModel.drop_off );
  }

}
