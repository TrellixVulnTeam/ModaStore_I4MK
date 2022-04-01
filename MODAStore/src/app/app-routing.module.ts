import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/admin/principal/login1/login1.component';
import { PrincipalComponent } from './component/admin/principal/principal1.component';
import { RegistroComponent } from './component/admin/principal/registro1/registro.component';
import { SecundarioComponent } from './component/admin/secundario/secundario2.component';
import { CompradorComponent } from './component/comprador/comprador.component';
import { HombreComponent } from './component/hombre/hombre.component';
import { NinhoComponent } from './component/hombre/ninho/ninho.component';
import { MenuComponent } from './component/menu/menu.component';
import { MujerComponent } from './component/mujer/mujer.component';
import { NinhaComponent } from './component/mujer/ninha/ninha.component';
import { NovedadesComponent } from './component/novedades/novedades.component';
import { OfertasComponent } from './component/ofertas/ofertas.component';
import { OutletComponent } from './component/outlet/outlet.component';
import { Page404Component } from './component/page404/page404.component';
import { UnisexComponent } from './component/unisex/unisex.component';
import { VendedorComponent } from './component/vendedor/vendedor.component';
import { NavBar1Component } from './component/nav-bar1/nav-bar1.component';

const routes: Routes = [

  { path: "", component: NavBar1Component },
  { path: "administrador", component: AdminComponent },
  { path: "admin/principal", component: PrincipalComponent },
  { path: "admin/principal/login1", component: LoginComponent },
  { path: "admin/principal/registro1", component: RegistroComponent },
  { path: "admin/secundario", component: SecundarioComponent },
  { path: "admin/secundario/login2", component: LoginComponent },
  { path: "admin/secundario/registro2", component: RegistroComponent },
  { path: "comprador", component: CompradorComponent },
  { path: "comprador/login3", component: LoginComponent },
  { path: "comprador/registro3", component: RegistroComponent },
  { path: "hombre", component: HombreComponent },
  { path: "hombre/ninho", component: NinhoComponent },
  { path: "menu", component: MenuComponent },
  { path: "mujer/ninha", component: MujerComponent },
  { path: "mujer/ninha", component: NinhaComponent },
  { path: "novedades", component: NovedadesComponent },
  { path: "ofertas", component: OfertasComponent },
  { path: "outlet", component: OutletComponent },
  { path: "**", component: Page404Component },
  { path: "unisex", component: UnisexComponent },
  { path: "vendedor", component: VendedorComponent },
  { path: "vendedor/login4", component: LoginComponent },
  { path: "vendedor/registro4", component: RegistroComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


})
export class AppRoutingModule { }
