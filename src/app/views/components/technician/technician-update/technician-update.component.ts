import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Technician } from 'src/app/Models/Technician';
import { MessageService } from 'src/app/services/message.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-technician-update',
  templateUrl: './technician-update.component.html',
  styleUrls: ['./technician-update.component.css']
})
export class TechnicianUpdateComponent {

  idTechnician!: string;

  name = new FormControl('', [Validators.minLength(5)]);
  cpf = new FormControl('', [Validators.minLength(11)]);
  phone = new FormControl('', [Validators.minLength(1)])
  
  technician: Technician ={
    id: 0,
    name: '',
    cpf: '',
    phone: ''
  
  }
  
    constructor(
      private technicianService: TechnicianService,
      private route: ActivatedRoute,
      private router: Router,
      private messageService: MessageService
    ) {}

ngOnInit(): void {
  
  this.idTechnician = this.route.snapshot.paramMap.get('id')!;
  this.findById();
}

findById(): any{
  this.technicianService.findById(this.idTechnician).subscribe(
    (resposta) => {
      this.technician = resposta;
    }
  )
}

  update(): any{
  
  this.technicianService.update(this.technician, this.idTechnician).subscribe((resposta) =>{
  this.messageService.message("Tecnico atualizado com sucesso!");
  this.router.navigate(['technicians']);
  
  }, (err) => {
    console.log(err);
    if(err.error.error.match('ja cadastrado')){
      this.messageService.message(err.error.error);
    }

    if(err.error.errors[0].message.match('registo de contribuinte')){
      this.messageService.message(err.error.errors[0].message);
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
