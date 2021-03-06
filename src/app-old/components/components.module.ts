import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [   
  SidebarComponent,   
  NavbarComponent,   
  FooterComponent
  ],
  exports: [
  SidebarComponent,   
  NavbarComponent,   
  FooterComponent
  ]
})
export class ComponentsModule { }
