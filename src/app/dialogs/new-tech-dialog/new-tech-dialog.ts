import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'new-tech-dialog',
    templateUrl: 'new-tech-dialog.html',
  })
  export class DialogOverviewExampleDialog {
    nombreTech: string;
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) { }
  
    onClick():void{
      this.dialogRef.close(this.nombreTech);
    }
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }