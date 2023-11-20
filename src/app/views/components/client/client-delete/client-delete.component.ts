import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/Models/Client';
import { ClientService } from 'src/app/services/client.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent {

  idClient!: string;

  client: Client ={
    id: 0,
    name: '',
    cpf: '',
    phone: ''
  
  }
  
    constructor(
      private clientService: ClientService,
      private route: ActivatedRoute,
      private router: Router,
      private messageService: MessageService
    ) {}

ngOnInit(): void {
  
  this.idClient = this.route.snapshot.paramMap.get('id')!;
  this.findById();
}

findById(): any{
  this.clientService.findById(this.idClient).subscribe(
    (resposta) => {
      this.client = resposta;
    }
  )
}

  delete(): any{
  
  this.clientService.delete(this.idClient).subscribe((resposta) =>{
  this.messageService.message("Cliente deletado com sucesso!");
  this.router.navigate(['clients']);
  
  }, (err) => {
    console.log(err);
    if(err.error.error.match('ja cadastrado')){
      this.messageService.message(err.error.error);
    }
  
  })
  }

  cancel(): any{
    this.router.navigate(["clients"]);
  }


}
