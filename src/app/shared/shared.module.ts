import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimeNgModule],
  exports: [TranslateModule, PrimeNgModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
