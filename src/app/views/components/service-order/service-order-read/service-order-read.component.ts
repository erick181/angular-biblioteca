import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceOrder } from 'src/app/Models/Service-order';
import { ClientService } from 'src/app/services/client.service';
import { ServiceOrderService } from 'src/app/services/service-order.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-service-order-read',
  templateUrl: './service-order-read.component.html',
  styleUrls: ['./service-order-read.component.css']
})
export class ServiceOrderReadComponent implements AfterViewInit {
  
  servicesOrders: ServiceOrder[] = [];
  
  displayedColumns: string[] = ['technician','client', 'dataAbertuda', 'dataFechamento', 'priority', 'status'];
  dataSource = new MatTableDataSource<ServiceOrder>(this.servicesOrders);

constructor(
  private serviceOrderService: ServiceOrderService,
  private technicianService: TechnicianService,
  private clientService: ClientService
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
      this.findAll();
  }

findAll(): any{
  this.serviceOrderService.findAll().subscribe
  ((resposta) =>{
    
    this.servicesOrders = resposta;
   console.log(resposta);
    this.listTechnician();
    this.listClient();
    
    this.dataSource = new MatTableDataSource<ServiceOrder>(this.servicesOrders);
    this.dataSource.paginator = this.paginator;
 
  });
}

listTechnician(): any{

  this.servicesOrders.forEach(x =>{
    this.technicianService.findById(x.technician).subscribe(
      (resposta) =>{
        x.technician = resposta.name;
      })
  })
}
listClient(): any{

  this.servicesOrders.forEach(x =>{
    this.clientService.findById(x.client).subscribe(
      (resposta) =>{
        x.client = resposta.name;
      })
  })
}

}
