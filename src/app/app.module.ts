import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//imports material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';

//forms e http

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//components
import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';
import { TechnicianReadComponent } from './views/components/technician/technician-read/technician-read.component';
import { TechnicianCreateComponent } from './views/components/technician/technician-create/technician-create.component';
import { TechnicianUpdateComponent } from './views/components/technician/technician-update/technician-update.component';
import { TechnicianDeleteComponent } from './views/components/technician/technician-delete/technician-delete.component';
import { ServiceOrderReadComponent } from './views/components/service-order/service-order-read/service-order-read.component';
import { ServiceOrderCreateComponent } from './views/components/service-order/service-order-create/service-order-create.component';
import { ServiceOrderUpdateComponent } from './views/components/service-order/service-order-update/service-order-update.component';
import { ClientReadComponent } from './views/components/client/client-read/client-read.component';
import { ClientCreateComponent } from './views/components/client/client-create/client-create.component';
import { ClientUpdateComponent } from './views/components/client/client-update/client-update.component';
import { ClientDeleteComponent } from './views/components/client/client-delete/client-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TechnicianReadComponent,
    TechnicianCreateComponent,
    TechnicianUpdateComponent,
    TechnicianDeleteComponent,
    ServiceOrderReadComponent,
    ServiceOrderCreateComponent,
    ServiceOrderUpdateComponent,
    ClientReadComponent,
    ClientCreateComponent,
    ClientUpdateComponent,
    ClientDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
