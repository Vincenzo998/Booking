import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request-service/request.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  listCar = [];
  CarForm: FormGroup;
  constructor(private fb: FormBuilder, public requestService:  RequestService) {
    this.CarForm = this.fb.group({
      location: ['', Validators.required],
      pick_up: ['', Validators.required],
      drop_off: ['', Validators.required],
    });
   }

  ngOnInit() {
  }

  showCar() {
    console.log(this.CarForm.value);

    this.requestService
          .getCarRentalAirportSearch(this.CarForm.value)
            .subscribe((data: any) => {
              this.listCar = data.results;
              console.log(data);
    });
  }

}
