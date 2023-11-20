import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { TechnicianReadComponent } from './views/components/technician/technician-read/technician-read.component';
import { TechnicianCreateComponent } from './views/components/technician/technician-create/technician-create.component';
import { TechnicianUpdateComponent } from './views/components/technician/technician-update/technician-update.component';
import { TechnicianDeleteComponent } from './views/components/technician/technician-delete/technician-delete.component';
import { ServiceOrderReadComponent } from './views/components/service-order/service-order-read/service-order-read.component';
import { ClientReadComponent } from './views/components/client/client-read/client-read.component';
import { ClientCreateComponent } from './views/components/client/client-create/client-create.component';
import { ClientUpdateComponent } from './views/components/client/client-update/client-update.component';
import { ClientDeleteComponent } from './views/components/client/client-delete/client-delete.component';
import { ServiceOrderCreateComponent } from './views/components/service-order/service-order-create/service-order-create.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'technicians', component: TechnicianReadComponent},
  {path: 'technicians/create', component: TechnicianCreateComponent},
  {path: 'technicians/update/:id', component: TechnicianUpdateComponent},
  {path: 'technicians/delete/:id', component: TechnicianDeleteComponent},
  {path: 'clients', component: ClientReadComponent},
  {path: 'clients/create', component: ClientCreateComponent},
  {path: 'clients/update/:id', component: ClientUpdateComponent},
  {path: 'clients/delete/:id', component: ClientDeleteComponent},
  {path: 'services-orders', component: ServiceOrderReadComponent},
  {path: 'services-orders/create', component: ServiceOrderCreateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
