import {NgModule} from '@angular/core';
import {CommonModule as ngCommon} from '@angular/common';
import {LoginComponent} from './login.component';
import {CommonModule} from '../../common/common.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ngCommon,
    CommonModule,
    FormsModule,
  ],
  exports: [LoginComponent]
})
export class LoginModule {
}
