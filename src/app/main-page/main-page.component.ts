import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { EntitiesService } from '../core/services/entities.service';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private entitiesService: EntitiesService, private dialog: MatDialog) {
  this.entitiesService = entitiesService;
    this.entities = [];
  }
  panelOpenState = false;
  entities: any = [];
  checkedItemsCounter = 0;

  ngOnInit() {
    this.entitiesService.getData().subscribe((data: any) => {
      this.checkedItemsCounter = data.filter((item) => item.connected === true).length;
      this.entities = data;
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '100%',
      height: '100%',
      data: 'Text'
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}
