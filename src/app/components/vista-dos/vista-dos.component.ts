import { Component } from '@angular/core';
import { TramosService } from 'src/app/services/tramos/tramos.service';

@Component({
  selector: 'app-vista-dos',
  templateUrl: './vista-dos.component.html',
  styleUrls: ['./vista-dos.component.css']
})
export class VistaDosComponent {
  fechaInicial!: string;
  fechaFinal!: string;
  historiaConsumosCliente!: any[];

  constructor(private tramosService: TramosService) {}

  obtenerHistoricoConsumos() {
    if (this.fechaInicial && this.fechaFinal) {
      this.tramosService.historicoCliente({ fechaInicial: this.fechaInicial, fechaFinal: this.fechaFinal }).subscribe(
        (data: any) => {
          this.historiaConsumosCliente = this.parseHistoricoConsumos(data);
        },
        (error: any) => {
          console.error('Error al obtener el historial de consumos:', error);
          this.historiaConsumosCliente = [];
        }
      );
    }
  }

  private parseHistoricoConsumos(data: any): any[] {
    const historiaConsumos: any[] = [];

    historiaConsumos.push({
      tramo: 'Residencial',
      consumo: data.residencial.consumo,
      perdidas: data.residencial.perdidas,
      costo: data.residencial.costo
    });

    historiaConsumos.push({
      tramo: 'Comercial',
      consumo: data.comercial.consumo,
      perdidas: data.comercial.perdidas,
      costo: data.comercial.costo
    });

    historiaConsumos.push({
      tramo: 'Industrial',
      consumo: data.industrial.consumo,
      perdidas: data.industrial.perdidas,
      costo: data.industrial.costo
    });

    return historiaConsumos;
  }
}
