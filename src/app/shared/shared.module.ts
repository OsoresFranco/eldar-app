import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    TranslateModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    SpinnerComponent,
  ],
})
export class SharedModule {}
