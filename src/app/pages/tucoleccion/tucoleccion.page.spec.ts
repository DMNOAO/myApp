import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TucoleccionPage } from './tucoleccion.page';

describe('TucoleccionPage', () => {
  let component: TucoleccionPage;
  let fixture: ComponentFixture<TucoleccionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TucoleccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
