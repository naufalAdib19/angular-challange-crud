import { Component } from '@angular/core';
import { HamburgerMenu } from '../../atoms/hamburger/hamburger.component';
import { Icons } from '../../atoms/icons/icons.component';
import { NavigationList } from '../../atoms/navigationList/navigationlist.component';
import { Sidebar } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.css',
  imports: [HamburgerMenu, Icons, NavigationList, Sidebar, CommonModule],
})
export class Navbar {
  isHamburgerActive: boolean = false;

  hamburgerState(value: boolean) {
    this.isHamburgerActive = value;
  }
}
