import { Component, Inject, Input } from '@angular/core';
import { ProductModels } from '../../../models/product';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements ProductModels {
  @Input() id: Number;
  @Input() title: String;
  @Input() price: Number;
  @Input() description: String;
  @Input() category: String;
  @Input() image: String;

  constructor(
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
  }

  onClickCard(): void {
    alert('Hello World!');
  }
}
