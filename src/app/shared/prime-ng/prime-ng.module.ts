import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [InputTextModule, FloatLabelModule, ButtonModule, SidebarModule, TooltipModule],
})
export class PrimeNgModule {}
