import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WireComponent } from './wire/wire.component';
import { EftComponent } from './eft/eft.component';

//entry components a eklenmezse treeshaking kullanılmadığı için siliyor
const declarations = [WireComponent, EftComponent];
@NgModule({
  declarations: declarations,
  entryComponents: declarations,
  imports: [
    CommonModule
  ]
})
export class MoneyTransfersModule {
  static declarations = declarations;
}
