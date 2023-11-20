import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private snakBar: MatSnackBar) { }

message(msg: string){
this.snakBar.open(`${msg}`,'OK',{
  horizontalPosition: 'end',
  verticalPosition: 'top',
  duration: 4000
})

}

}
