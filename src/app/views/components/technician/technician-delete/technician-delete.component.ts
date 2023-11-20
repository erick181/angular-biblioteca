import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Technician } from 'src/app/Models/Technician';
import { MessageService } from 'src/app/services/message.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-technician-delete',
  templateUrl: './technician-delete.component.html',
  styleUrls: ['./technician-delete.component.css']
})
export class TechnicianDeleteComponent {

  idTechnician!: string;

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

  delete(): any{
  
  this.technicianService.delete(this.idTechnician).subscribe((resposta) =>{
  this.messageService.message("Tecnico deletado com sucesso!");
  this.router.navigate(['technicians']);
  
  }, (err) => {
    console.log(err);
    if(err.error.error.match('ja cadastrado')){
      this.messageService.message(err.error.error);
    }
  
  })
  }

  cancel(): any{
    this.router.navigate(["technicians"]);
  }

}
