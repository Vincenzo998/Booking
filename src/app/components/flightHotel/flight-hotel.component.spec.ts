import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightHotelComponent } from './flight-hotel.component';

describe('FlightHotelComponent', () => {
  let component: FlightHotelComponent;
  let fixture: ComponentFixture<FlightHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
