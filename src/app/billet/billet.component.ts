import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-billet',
  templateUrl: './billet.component.html',
  styleUrls: ['./billet.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]  // <- IMPORTANTE
})
export class BilletComponent {
  selectedTab: number = 1;
  ingresos: { descripcion: string, monto: number }[] = [];
  gastos: { descripcion: string, monto: number }[] = [];

  agregarIngreso(desc: string, monto: number) {
    if(desc && monto) this.ingresos.push({ descripcion: desc, monto });
  }

  agregarGasto(desc: string, monto: number) {
    if(desc && monto) this.gastos.push({ descripcion: desc, monto });
  }

  getTotalIngresos() { return this.ingresos.reduce((s,i)=>s+i.monto,0); }
  getTotalGastos() { return this.gastos.reduce((s,g)=>s+g.monto,0); }
}
