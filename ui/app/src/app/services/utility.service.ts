import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
  getRandomNumber() {
    return Math.random();
  } 
}
