import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristicPlaceComponent } from './touristic-place.component';

describe('TouristicPlaceComponent', () => {
  let component: TouristicPlaceComponent;
  let fixture: ComponentFixture<TouristicPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristicPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristicPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
