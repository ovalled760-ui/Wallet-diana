import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   
import { FormsModule } from '@angular/forms';     

@Component({
  selector: 'app-agregar-gastos',
  standalone: true,
  imports: [CommonModule, FormsModule],          
  templateUrl: './agregar-gastos.component.html',
  styleUrls: ['./agregar-gastos.component.css']
})
export class AgregarGastosComponent {
  descripcion: string = '';
  monto: number = 0;
  gastos: { descripcion: string; monto: number }[] = [];

  agregarGasto() {
    if (this.descripcion.trim() && this.monto > 0) {
      this.gastos.push({
        descripcion: this.descripcion,
        monto: this.monto
      });
      this.descripcion = '';
      this.monto = 0;
    }
  }
}
