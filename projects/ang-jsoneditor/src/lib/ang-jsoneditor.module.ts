import { ModuleWithProviders, NgModule } from '@angular/core';

import { AngJsoneditorComponent } from './ang-jsoneditor.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AngJsoneditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AngJsoneditorComponent
  ]
})
export class AngJsoneditorModule {
  public static forRoot(): ModuleWithProviders<any> {

    return {
      ngModule: AngJsoneditorModule,
      providers: [
      ]
    };
  }
 }
