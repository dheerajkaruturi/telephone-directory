import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const materialModule = [MatButtonModule, MatToolbarModule, MatIconModule];

@NgModule({
  imports: [materialModule],
  exports: [materialModule],
})
export class AngularMaterialModule {}
