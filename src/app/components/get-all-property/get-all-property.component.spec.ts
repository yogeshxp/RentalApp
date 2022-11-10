import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPropertyComponent } from './get-all-property.component';

describe('GetAllPropertyComponent', () => {
  let component: GetAllPropertyComponent;
  let fixture: ComponentFixture<GetAllPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
