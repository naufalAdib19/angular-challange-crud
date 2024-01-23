import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../../molecules/card/card.component';
import { ProductDataService } from '../../../services/product-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card-list',
  standalone: true,
  imports: [CardComponent, HttpClientModule, CommonModule],
  templateUrl: './cardlist.component.html',
  styleUrl: './cardlist.component.css',
})
export class CardlistComponent implements OnInit {
  productList: CardComponent[] = [];

  constructor(private productDataService: ProductDataService) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      const res = await this.productDataService.getData();
      this.productList = res.data;
      console.log(this.productList);
    } catch (error) {
      console.log(error);
    }
  }
}
