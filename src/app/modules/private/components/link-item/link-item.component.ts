import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrl: './link-item.component.scss'
})
export class LinkItemComponent {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() route: string = '';
  @Input() showLabel: boolean = true;
}
