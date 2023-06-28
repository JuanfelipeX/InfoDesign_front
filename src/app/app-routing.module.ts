import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorNoEncontradoComponent } from './components/error-no-encontrado/error-no-encontrado.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { VistaDosComponent } from './components/vista-dos/vista-dos.component';
import { VistaTresComponent } from './components/vista-tres/vista-tres.component';
import { VistaUnoComponent } from './components/vista-uno/vista-uno.component';

const routes: Routes = [
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'vista-uno', component: VistaUnoComponent },
  { path: 'vista-dos', component: VistaDosComponent },
  { path: 'vista-tres', component: VistaTresComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full' },
  { path: '**', component: ErrorNoEncontradoComponent }, //Sitio Web No Encontrado 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
