import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request-service/request.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  listTrain = [];
  TrainForm: FormGroup;
  constructor(private fb: FormBuilder, public requestService:  RequestService) {
    this.TrainForm = this.fb.group({
      origin: ['', Validators.required],
      departure_date: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  showTrain() {
    console.log(this.TrainForm.value);

    this.requestService
          .getTrainScheduleSearch(this.TrainForm.value)
            .subscribe((data: any) => {
              this.listTrain = data.results;
              console.log(data);
            });
  }
}
