import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogsService } from './dialogs.service';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { DialogOverviewExampleDialog } from './new-tech-dialog/new-tech-dialog'
import { MaterialModule } from '../app.material.module'
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    ConfirmDialogComponent,
    DialogOverviewExampleDialog,
    
  ],
  exports: [ConfirmDialogComponent,
    DialogOverviewExampleDialog],
  entryComponents: [ConfirmDialogComponent,
    DialogOverviewExampleDialog],
  providers: [DialogsService]
})
export class DialogsModule { }