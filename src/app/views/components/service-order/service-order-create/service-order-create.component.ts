import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Client } from 'src/app/Models/Client';
import { ServiceOrder } from 'src/app/Models/Service-order';
import { Technician } from 'src/app/Models/Technician';
import { ClientService } from 'src/app/services/client.service';
import { MessageService } from 'src/app/services/message.service';
import { ServiceOrderService } from 'src/app/services/service-order.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-service-order-create',
  templateUrl: './service-order-create.component.html',
  styleUrls: ['./service-order-create.component.css']
})
export class ServiceOrderCreateComponent {


technicians: Technician[] = [];
clients: Client[] = [];
serviceOrder: ServiceOrder = {
  priority: '',
  observation: '',
  status: '',
  technician: '',
  client: ''
}


constructor(
  private technicianService: TechnicianService,
  private clientService: ClientService,
  private serviceOrderService: ServiceOrderService,
  private messageService: MessageService,
  private router: Router
){}

ngOnInit(): void {
  
  this.listTechnicians();
  this.listClients();
  
}

listTechnicians():any {

  this.technicianService.findAll().subscribe(resposta =>{
    this.technicians = resposta;
  })

}

listClients(): any{

  this.clientService.findAll().subscribe(resposta => {
    this.clients = resposta;
  })

}

create(): any{

this.serviceOrderService.create(this.serviceOrder).subscribe(
  (resposta) =>{
    this.messageService.message("Ordem de serviço criada com sucesso!");
  })

}

cancel(): any{

}

}