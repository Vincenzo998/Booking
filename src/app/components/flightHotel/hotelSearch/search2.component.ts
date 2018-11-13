import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request-service/request.service';

@Component({
  selector: 'app-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.css']
})
export class Search2Component implements OnInit {

  @Output() formResults = new EventEmitter<any>();
  listHotel = [];
  HotelForm: FormGroup;
  constructor(private fb: FormBuilder, public requestService:  RequestService) {
    this.HotelForm = this.fb.group ({
      location: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  showHotel() {
    console.log(this.HotelForm.value);

    this.requestService
          .getHotelAirportSearch(this.HotelForm.value)
            .subscribe((data: any) => {
              this.listHotel = data.results;
              this.formResults.emit(this.listHotel);
              console.log(data);
          });
  }

}
