import { Component } from '@angular/core';
import { NavigationList } from '../../atoms/navigationList/navigationlist.component';

@Component({
  selector: 'sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  imports: [NavigationList],
})
export class Sidebar {}
