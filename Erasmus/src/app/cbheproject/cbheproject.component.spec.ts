import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBHEPROJECTComponent } from './cbheproject.component';

describe('CBHEPROJECTComponent', () => {
  let component: CBHEPROJECTComponent;
  let fixture: ComponentFixture<CBHEPROJECTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CBHEPROJECTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CBHEPROJECTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
