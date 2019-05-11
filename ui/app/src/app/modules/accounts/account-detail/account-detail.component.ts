import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  randomNumber: number;
  constructor(private utilityService: UtilityService) { }
  
  //prod buildde minify olduğunda ComponentName de minify olduğu için 
  //ComponentType ı buradan alıyorum
  public static get componentType() {
    return "AccountDetailComponent";
  }
  ngOnInit() {
    this.randomNumber = this.utilityService.getRandomNumber();
  }

}
