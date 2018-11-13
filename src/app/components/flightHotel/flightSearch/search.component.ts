import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request-service/request.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  listFlight = [];
  FlightForm: FormGroup;
  constructor(private fb: FormBuilder, public requestService:  RequestService) {
    this.FlightForm = this.fb.group ({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      departure_date: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  showFlight() {
    console.log(this.FlightForm.value);

    this.requestService
          .getFlightExtensiveSearch(this.FlightForm.value)
            .subscribe((data: any) => {
              this.listFlight = data.results;
              console.log(data);
            });
  }
}

