import { Component, Injectable, Input } from '@angular/core';
import { ProductModels } from '../../../models/product';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements ProductModels {
  @Input() id: Number = 0;
  @Input() title: String = '';
  @Input() price: Number = 0;
  @Input() description: String = '';
  @Input() category: String = '';
  @Input() image: String = '';

  truncateTitle(): String {
    const maxLength = 37;
    if (this.title.length > maxLength) {
      return this.title.substring(0, 37) + '...';
    }
    return this.title;
  }

  onClickCard(): void {
    alert('Hello World!');
  }
}
