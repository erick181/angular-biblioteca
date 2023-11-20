import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/Models/Client';
import { ClientService } from 'src/app/services/client.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent {

  name = new FormControl('', [Validators.minLength(5)]);
  cpf = new FormControl('', [Validators.minLength(11)]);
  phone = new FormControl('', [Validators.minLength(1)])
  
  client: Client ={
  
    name: '',
    cpf: '',
    phone: ''
  
  }
  
    constructor(
      private clientService: ClientService,
      private router: Router,
      private messageService: MessageService
    ) {}
  create(): any{

  this.clientService.create(this.client).subscribe((resposta) =>{
  this.messageService.message("Cliente criado com sucesso!");
  this.router.navigate(['clients']);
  
  }, (err) => {
    console.log(err);
    if(err.error.error.match('ja cadastrado')){
      this.messageService.message(err.error.error);
    }
  
  })
  }
  
  errorValidName(): any{
    if(this.name.invalid){
      return 'O nome tem que ter entre 5 e 100 caracteres';
    }
    return false;
  }
  errorValidCpf(): any{
    if(this.cpf.invalid){
      return 'O cpf tem que ter entre 5 e 100 caracteres';
    }
    return false;
  }
  errorValidPhone(): any{
    if(this.phone.invalid){
      return 'O telefone tem que ter entre 5 e 100 caracteres';
    }
    return false;
  }
  
  activeButton(): boolean{
  
    if(this.name.invalid){
      return true;
    }else{
      if(this.cpf.invalid){
        return true;
      }else{
        if(this.phone.invalid){
          return true;
        }
      }
    }
  
    return false;
  
  }
  
  cancel(): any{
    this.router.navigate(["clients"]);
  }

}
