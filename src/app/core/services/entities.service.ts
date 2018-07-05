import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/observable/of';

@Injectable()
export class EntitiesService {

  constructor() {
    this.data$.next(this.entities);
  }

  entities = [
    {
      name: 'Arrivals',
      type: 'Database',
      connected: true,
      id: 1
    },
    {
      name: 'Calculator',
      type: 'Application',
      connected: false,
      id: 2
    },
    {
      name: 'California',
      type: 'Server',
      connected: true,
      id: 3
    },
    {
      name: 'Car Wash',
      type: 'BPM',
      connected: false,
      id: 4
    },
    {
      name: 'Customer payment',
      type: 'BPM',
      connected: false,
      id: 5
    },
    {
      name: 'Technical issues',
      type: 'Project',
      connected: false,
      id: 6
    }
  ];
  public data$ = new ReplaySubject(1);

  updateEntities(data) {
    this.data$.next(data);
  }

  getData() {
    return this.data$;
  }

}
