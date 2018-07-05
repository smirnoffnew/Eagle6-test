import {Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { EntitiesService } from '../core/services/entities.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private entitiesService: EntitiesService,
  ) {
    this.entities = [];
  }

  entities: any = [];
  searchStr = '';

  handleChange() {
    console.log(this.searchStr);
  }

  ngOnInit() {
    this.entitiesService.getData().subscribe((data) => {
      this.entities = data;
    });
  }

  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }

  chageMethod(id) {
    this.entities = this.entities.map((item) => {
      return item.id === id ? {name: item.name, type: item.type, connected: !item.connected,  id: item.id} : item ;
    });
    console.log(this.entities);
  }

  onCloseSubmit() {
    this.dialogRef.close(this.entities);
    this.entitiesService.updateEntities(this.entities);
  }

}
