import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLandlordpropertyComponent } from './add-landlordproperty.component';

describe('AddLandlordpropertyComponent', () => {
  let component: AddLandlordpropertyComponent;
  let fixture: ComponentFixture<AddLandlordpropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLandlordpropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLandlordpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
