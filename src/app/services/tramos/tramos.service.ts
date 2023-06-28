import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from '../configuration.service';

@Injectable({
  providedIn: 'root'
})
export class TramosService {

  private URL_BASE: string;

  constructor(
    private configuration: ConfigurationService,
    private http: HttpClient,
    private router: Router
  ) {
    this.URL_BASE = this.configuration.getUrlBase();
  }

  obtenerTramos() {
    return this.http.get<any>(this.URL_BASE + 'tramos');
  }

  crearHistorias(data: any) {
    return this.http.post(this.URL_BASE + 'tramos/historias', data);
  }

  historicoConsumos(data: any) {
    return this.http.post(this.URL_BASE + 'tramos/historico-consumos', data);
  }

  topPeores(data: any) {
    return this.http.post(this.URL_BASE + 'tramos/top-peores-tramos-cliente', data);
  }
}
