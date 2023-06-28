import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TramosService } from 'src/app/services/tramos/tramos.service';

@Component({
  selector: 'app-vista-tres',
  templateUrl: './vista-tres.component.html',
  styleUrls: ['./vista-tres.component.css']
})
export class VistaTresComponent implements OnInit {

  fechaInicial!: string;
  fechaFinal!: string;
  peoresTramosCliente!: any[];

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
      this.tramoService.peoresTramos({ fechaInicial: this.fechaInicial, fechaFinal: this.fechaFinal }).subscribe(
        (data: any) => {
          this.peoresTramosCliente = data;
        },
        (error: any) => {
          console.error('Error al obtener la historia:', error);
          this.peoresTramosCliente = [];
        }
      );
    }
  }
}
