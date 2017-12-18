import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { DialogOverviewExampleDialog } from './new-tech-dialog/new-tech-dialog';

@Injectable()
export class DialogsService {
/*     animal: string;
    name: string; */

    constructor(private dialog: MatDialog) { }

    public confirm(title: string, message: string): Observable<boolean> {

        let dialogRef: MatDialogRef<ConfirmDialogComponent>;

        dialogRef = this.dialog.open(ConfirmDialogComponent);

        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }
    openDialog():  Observable<string> {
        let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
          width: '250px',
          /* data: { name: this.name, animal: this.animal } */
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          console.log(result);
          /* this.animal = result; */
         
        });
        return dialogRef.afterClosed();
      }
    
}