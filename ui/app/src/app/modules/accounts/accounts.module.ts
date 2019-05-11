import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';

const declarations = [AccountListComponent, AccountDetailComponent];
//entry components a eklenmezse treeshaking kullanılmadığı için siliyor
@NgModule({
  declarations: declarations,
  entryComponents: declarations,
  imports: [
    CommonModule
  ]
})
export class AccountsModule { 
  static declarations = declarations;
}
