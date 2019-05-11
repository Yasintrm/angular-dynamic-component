import { Component, OnInit } from '@angular/core';
import { UtilityService as DummyService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  randomNumber: number;
  constructor(private dummyService: DummyService) { }

  ngOnInit() {
    this.randomNumber = this.dummyService.getRandomNumber();
  }

  //prod buildde minify olduğunda ComponentName de minify olduğu için 
  //ComponentType ı buradan alıyorum
  public static get componentType() {
    return "AccountListComponent";
  }
}
