import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TramosService } from 'src/app/services/tramos/tramos.service';

@Component({
  selector: 'app-vista-dos',
  templateUrl: './vista-dos.component.html',
  styleUrls: ['./vista-dos.component.css']
})
export class VistaDosComponent implements OnInit {

  fechaInicial!: string;
  fechaFinal!: string;
  historiaConsumosCliente!: any[];

  constructor(
    private tramoService: TramosService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  /*
************************************************
*             Historico Consumos               *
************************************************
*/
  obtenerTramos() {
    if (this.fechaInicial && this.fechaFinal) {
      this.tramoService.historicoCliente({ fechaInicial: this.fechaInicial, fechaFinal: this.fechaFinal }).subscribe(
        (data: any) => {
          this.historiaConsumosCliente = data;
        },
        (error: any) => {
          console.error('Error al obtener la historia:', error);
          this.historiaConsumosCliente = [];
        }
      );
    }
  }

}
