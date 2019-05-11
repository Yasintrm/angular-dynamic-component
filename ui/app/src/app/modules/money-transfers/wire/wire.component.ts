import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-wire',
  templateUrl: './wire.component.html',
  styleUrls: ['./wire.component.css']
})
export class WireComponent implements OnInit {

  randomNumber: number;
  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.randomNumber = this.utilityService.getRandomNumber();
  }

  //prod buildde minify olduğunda ComponentName de minify olduğu için 
  //ComponentType ı buradan alıyorum
  public static get componentType() {
    return "WireComponent";
  }

}
