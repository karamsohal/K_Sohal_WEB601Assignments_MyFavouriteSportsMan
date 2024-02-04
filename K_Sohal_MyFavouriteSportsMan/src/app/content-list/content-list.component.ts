import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  contentArray: Content[] = [
    { id: 1, title: 'Rohit Sharma', description: 'Rohit Gurunath Sharma (born 30 April 1987) is an Indian international cricketer who currently captains the India national cricket team across all formats.', creator: 'Coach Ravi', imgURL: 'https://th.bing.com/th/id/OIP.V00c36Xpu6ckBZ4V8YpAUgAAAA?rs=1&pid=ImgDetMain', type: 'Cricketer', tags: ['india', 'cricket'] },
    { id: 2, title: 'AB Devillier', description: 'Abraham Benjamin de Villiers (born 17 February 1984) is a South African former international cricketer, and a current commentator.', creator: 'Self', imgURL: 'https://th.bing.com/th/id/OIP.JtJOJGMLS2yz6uKI7O0YGwHaLK?rs=1&pid=ImgDetMain', type: 'Cricketer', tags: ['south africa', 'cricket'] },
    { id: 3, title: 'MS Dhoni', description: 'Dhoni is primarily known for his role as a wicketkeeper-batsman. He is regarded as one of the best finishers in limited-overs cricket.', creator: 'Keshav Banerjee', imgURL: 'https://media.gettyimages.com/id/463104414/photo/alternative-views-2015-icc-cricket-world-cup-headshots-session.webp?s=1024x1024&w=gi&k=20&c=BarUFtfJKDrsIQe0uKA4-cMLmi9sxyW2NOXyYxIX4sU=', type: 'Cricketer', tags: ['india', 'cricket'] },
    { id: 4, title: 'Virat Kohli', description: 'Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team. He is a right-handed batsman and an occasional medium-fast bowler. He currently represents Royal Challengers Bangalore in the IPL and Delhi in domestic cricket.', creator: 'Rajkumar Sharma', imgURL: 'https://th.bing.com/th/id/OIP.ce8fSLg5Von4fqYa5eXL2gHaLG?rs=1&pid=ImgDetMain', type: 'Cricketer', tags: ['india', 'cricket'] },
    { id: 5, title: 'Sehwag', description: 'Virender Sehwag (pronunciation , born 20 October 1978) is a former Indian cricketer who represented India from 1999 to 2013. Widely regarded as one of the most destructive openers and one of the greatest batsman of his era, he played for Delhi Capitals in IPL and Delhi and Haryana in Indian domestic', creator: 'Self', imgURL: 'https://th.bing.com/th/id/OIP.EXKS8h6UIHSwvY-rBAhfdgHaKX?rs=1&pid=ImgDetMain', type: 'Cricketer', tags: ['india', 'cricket'] },
    { id: 6, title: 'Maxwell', description: 'Glenn James Maxwell (born 14 October 1988) is an Australian professional cricketer. He has played for the Australia national cricket team in all formats of the game since 2012, although he is primarily a One Day International and Twenty20 International specialist.', creator: 'Self', imgURL: 'https://th.bing.com/th/id/OIP.f0PtdCmb7lBhErIXKIBPoAAAAA?rs=1&pid=ImgDetMain', type: 'Cricketer', tags: ['australia', 'cricket'] },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleImageClick(id: number, title: string): void {
    console.log(`Clicked on image with ID: ${id}, Title: ${title}`);
  }
}