import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-eft',
  templateUrl: './eft.component.html',
  styleUrls: ['./eft.component.css']
})
export class EftComponent implements OnInit {

  randomNumber: number;
  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.randomNumber = this.utilityService.getRandomNumber();
  }

  //prod buildde minify olduğunda ComponentName de minify olduğu için 
  //ComponentType ı buradan alıyorum
  public static get componentType() {
    return "EftComponent";
  }
}
