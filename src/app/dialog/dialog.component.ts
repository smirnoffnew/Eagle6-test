import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  ngOnInit() {
  }

  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }

  onCloseSubmit() {
    this.dialogRef.close('Submit');
  }

}
