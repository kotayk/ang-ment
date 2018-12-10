import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { LinkComponent } from './link/link.component';
import { ButtonComponent } from './button/button.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule as ngCommon } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [HeaderComponent, LogoComponent, LinkComponent, ButtonComponent, BreadcrumbsComponent, FooterComponent, UserLoginComponent],
  imports: [ngCommon],
  exports: [HeaderComponent, LogoComponent, LinkComponent, ButtonComponent, BreadcrumbsComponent, FooterComponent, UserLoginComponent],
})
export class CommonModule {
}
