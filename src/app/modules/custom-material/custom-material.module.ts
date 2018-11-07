import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatCardActions} from '@angular/material/card';
@NgModule({
  imports: [
    CommonModule,MatCardModule
  ],
  exports:[
    MatCardModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
