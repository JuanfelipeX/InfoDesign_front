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

  historicoTramo(data: any) {
    return this.http.post(this.URL_BASE + 'tramo/historias', data);
  }

  historicoCliente(data: any) {
    return this.http.post(this.URL_BASE + 'tramo/historico-consumos', data);
  }

  peoresTramos(data: any) {
    return this.http.post(this.URL_BASE + 'tramo/top-peores-tramos-cliente', data);
  }
}
