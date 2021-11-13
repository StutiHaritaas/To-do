import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  details = [
    { Task: 'Attend the classes', Preference: 1 },

    { Task: 'Go to the library', Preference: 2 },

    { Task: 'Complete the asssigned project', Preference: 3 },

    { Task: 'Read a novel', Preference: 4 },
  ];

  getDetails() {
    return this.details;
  }
  constructor() {}
}
