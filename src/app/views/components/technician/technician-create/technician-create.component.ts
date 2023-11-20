import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Technician } from 'src/app/Models/Technician';
import { MessageService } from 'src/app/services/message.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-technician-create',
  templateUrl: './technician-create.component.html',
  styleUrls: ['./technician-create.component.css']
})
export class TechnicianCreateComponent {

name = new FormControl('', [Validators.minLength(5)]);
cpf = new FormControl('', [Validators.minLength(11)]);
phone = new FormControl('', [Validators.minLength(1)])

technician: Technician ={

  name: '',
  cpf: '',
  phone: ''

}

  constructor(
    private technicianService: TechnicianService,
    private router: Router,
    private messageService: MessageService
  ) {}
create(): any{
console.log(this.technician);
this.technicianService.create(this.technician).subscribe((resposta) =>{
this.messageService.message("Tecnico criado com sucesso!");
this.router.navigate(['technicians']);

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
  this.router.navigate(["technicians"]);
}

}
