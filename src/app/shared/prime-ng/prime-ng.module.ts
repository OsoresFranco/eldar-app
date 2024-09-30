import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { MatDialogModule } from '@angular/material/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    SidebarModule,
    TooltipModule,
    TableModule,
    DropdownModule,
    MenuModule,
    ToastModule,
    RadioButtonModule,
    CalendarModule,
    MatDialogModule,
    ProgressSpinnerModule
  ],
})
export class PrimeNgModule {}
