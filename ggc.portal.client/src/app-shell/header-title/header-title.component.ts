import { Component } from '@angular/core';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss']
})
export class HeaderTitleComponent {
  public products: Array<any> = [
    {
      id: '1',
      name: 'Home',
    },
    {
      id: '4',
      name: 'Location',
    },
    {
      id: '2',
      name: 'About us',
    }
    // {
    //   id: '3',
    //   name: 'Ministries',
    //   items: [
    //     {
    //       id: '3_1',
    //       name: "Kids' Ministry",
    //     },
    //     {
    //       id: '3_2',
    //       name: 'Youth Ministry',
    //     },
    //     {
    //       id: '3_3',
    //       name: "Women's Ministry",
    //     },
    //     {
    //       id: '3_4',
    //       name: "Men's Ministry",
    //     },
    //   ],
    // },
  ];

  itemClick(data: any) {
    console.log(data);
  }

}