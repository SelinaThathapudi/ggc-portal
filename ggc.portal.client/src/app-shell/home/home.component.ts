import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public dataSource: string[] = [
    '../assets/images/2023/christmas_1.jpg',
    '../assets/images/2023/jospeh_geddam_desi_christmas_1.jpg',
  ];
  public slideshowDelay = 20000;
  screen(width: any) {
    return width < 700 ? 'sm' : 'lg';
  }

  public homes: Home[] = [
    {
      ID: '1',
      Address: 'Worship with us in person',
      City: 'Toronto',
      State: 'ON',
      Price: 780000,
      ImageSrc: '../assets/images/stock/join_us_in_person.jpg',
      heightRatio: 4,
      widthRatio: 4,
    },
    {
      ID: '2',
      Address: 'Worship with us online',
      City: 'Toronto',
      State: 'ON',
      Price: 780000,
      ImageSrc: '../assets/images/stock/worship_online.PNG',
      heightRatio: 3,
      widthRatio: 4,
    },
    {
      ID: '3',
      Address: 'Connect with us fb',
      City: 'Toronto',
      State: 'ON',
      Price: 780000,
      ImageSrc: '../assets/images/stock/facebook_icon.jpeg',
      heightRatio: 1,
      widthRatio: 1,
    },
    {
      ID: '4',
      Address: 'Connect with us isnta',
      City: 'Toronto',
      State: 'ON',
      Price: 780000,
      ImageSrc: '../assets/images/stock/instagram_icon.jpeg',
      heightRatio: 1,
      widthRatio: 1,
    },
    {
      ID: '5',
      Address: 'Connect with us youtube',
      City: 'Toronto',
      State: 'ON',
      Price: 780000,
      ImageSrc: '../assets/images/stock/youtube_icon.jpeg',
      heightRatio: 1,
      widthRatio: 1,
    },
    {
      ID: '6',
      Address: 'Connect with us whatsapp',
      City: 'Toronto',
      State: 'ON',
      Price: 780000,
      ImageSrc: '../assets/images/stock/whatsapp_icon.jpeg',
      heightRatio: 1,
      widthRatio: 1,
    },
    {
      ID: '7',
      Address: 'About us',
      City: 'Toronto',
      State: 'ON',
      Price: 780000,
      ImageSrc: '../assets/images/stock/pastors.jpg',
      heightRatio: 4,
      widthRatio: 2,
    },
    {
      ID: '8',
      Address: 'Kids Ministry',
      City: 'Toronto',
      State: 'ON',
      Price: 780000,
      ImageSrc: '../assets/images/stock/kids_ministry.jpg',
      heightRatio: 2,
      widthRatio: 2,
    },
    {
      ID: '9',
      Address: 'Youth Ministry',
      City: 'Toronto',
      State: 'ON',
      Price: 780000,
      ImageSrc: '../assets/images/stock/youth_ministry.jpg',
      heightRatio: 2,
      widthRatio: 2,
    },
    {
      ID: '10',
      Address: 'Women\'s Ministry',
      City: 'Toronto',
      State: 'ON',
      Price: 780000,
      ImageSrc: '../assets/images/stock/womens_ministry.jpg',
      heightRatio: 2,
      widthRatio: 2,
    },
    {
      ID: '11',
      Address: 'Men\'s Ministry',
      City: 'Toronto',
      State: 'ON',
      Price: 780000,
      ImageSrc: '../assets/images/stock/mens_ministry.jpg',
      heightRatio: 2,
      widthRatio: 2,
    }
  ];
}

export class Home {
  ID?: string;

  Address?: string;

  City?: string;

  State?: string;

  Price?: number;

  ImageSrc?: string;

  heightRatio?: number;

  widthRatio?: number;
}
