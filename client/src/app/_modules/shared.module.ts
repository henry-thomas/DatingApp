import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {NgxGalleryModule} from '@kolkov/ngx-gallery';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),
    TabsModule.forRoot(),
    NgxGalleryModule
  ],
  exports: [
    BsDropdownModule,
    ToastrModule,
    TabsModule,
    NgxGalleryModule
  ]
})
export class SharedModule { }
