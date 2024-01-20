import { Component } from '@angular/core';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss']
})
export class HeaderTitleComponent {
  public menuItems: Array<any> = [
    {
      id: '1',
      name: 'Home',
    },
    {
      id: '2',
      name: 'Events',
    },
    {
      id: '2',
      name: 'Songs',
    }
  ];

  itemClick(data: any) {
    console.log(data);
  }

}