import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/Models/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements AfterViewInit {
  
  clients: Client[] = [];
  
  displayedColumns: string[] = ['id', 'name', 'cpf', 'phone', 'acoes'];
  dataSource = new MatTableDataSource<Client>(this.clients);

constructor(
  private clientService: ClientService
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
      this.findAll();
  }

findAll(): any{
  this.clientService.findAll().subscribe
  ((resposta) =>{
    
    this.clients = resposta;
    this.dataSource = new MatTableDataSource<Client>(this.clients);
    this.dataSource.paginator = this.paginator;
    
  });
}

}
