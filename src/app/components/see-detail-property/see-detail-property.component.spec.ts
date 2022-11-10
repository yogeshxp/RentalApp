import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeDetailPropertyComponent } from './see-detail-property.component';

describe('SeeDetailPropertyComponent', () => {
  let component: SeeDetailPropertyComponent;
  let fixture: ComponentFixture<SeeDetailPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeDetailPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeDetailPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
