import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Technician } from 'src/app/Models/Technician';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-technician-read',
  templateUrl: './technician-read.component.html',
  styleUrls: ['./technician-read.component.css']
})
export class TechnicianReadComponent implements AfterViewInit {
  
  technicians: Technician[] = [];
  
  displayedColumns: string[] = ['id', 'name', 'cpf', 'phone', 'acoes'];
  dataSource = new MatTableDataSource<Technician>(this.technicians);

constructor(
  private technicianService: TechnicianService
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
      this.findAll();
  }

findAll(): any{
  this.technicianService.findAll().subscribe
  ((resposta) =>{
    
    this.technicians = resposta;
    this.dataSource = new MatTableDataSource<Technician>(this.technicians);
    this.dataSource.paginator = this.paginator;
    
  });
}

}



