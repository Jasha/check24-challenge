import { Component, Input } from '@angular/core';

@Component({
  selector: 'c24-selected-filter',
  templateUrl: './selected-filter.component.html',
  styleUrls: ['./selected-filter.component.scss']
})
export class SelectedFilterComponent {
  @Input() title: string;
  @Input() value: string;
  @Input() descriptor: string;
}
