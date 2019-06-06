import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

/*
@Injectable({
  providedIn: 'root'
})
*/
@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let heroes = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' }
    ];
    return { heroes };
  }
}
