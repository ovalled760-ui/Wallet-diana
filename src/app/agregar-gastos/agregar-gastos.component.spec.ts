import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AgregarGastosComponent } from './agregar-gastos.component';

describe('GastosComponent', () => {
  let component: AgregarGastosComponent;
  let fixture: ComponentFixture<AgregarGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarGastosComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});