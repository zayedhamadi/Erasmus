import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErasmusDocumentComponent } from './erasmus-document.component';

describe('ErasmusDocumentComponent', () => {
  let component: ErasmusDocumentComponent;
  let fixture: ComponentFixture<ErasmusDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErasmusDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErasmusDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
