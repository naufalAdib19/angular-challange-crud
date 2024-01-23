import { Component } from '@angular/core';
import { CardlistComponent } from '../../organisms/cardlist/cardlist.component';

@Component({
  selector: 'product-pages',
  standalone: true,
  imports: [CardlistComponent],
  templateUrl: './product-pages.component.html',
  styleUrl: './product-pages.component.css',
})
export class ProductPages {}
