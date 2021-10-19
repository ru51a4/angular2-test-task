import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from 'src/app/core/components/map/map.component';
import { ListComponent } from 'src/app/core/components/list/list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MapComponent, ListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MapComponent, ListComponent]
})
export class SharedModule {
}
