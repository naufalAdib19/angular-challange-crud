import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hamburger-menu',
  templateUrl: './hamburger.component.html',
  standalone: true,
  styleUrl: './hamburger.component.css',
  imports: [CommonModule],
})
export class HamburgerMenu {
  isActive: boolean;
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor() {
    this.isActive = false;
  }

  onClickHamburger(): void {
    this.isActive = !this.isActive;
  }

  hamburgerState() {
    this.newItemEvent.emit(this.isActive);
  }
}
