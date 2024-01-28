import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList = new ContentList();
  constructor(){
    this.contentList.add({
      id:1,
      title:"Rohit Sharma",
      description: "Rohit Gurunath Sharma (born 30 April 1987) is an Indian international cricketer who currently captains the India national cricket team across all formats.",
      creator: "Coach Ravi",
      imgURL: "/assets/images/Rohit.webp"
    });
    this.contentList.add({
      id:2,
      title:"AB Devillier",
      description: "Abraham Benjamin de Villiers (born 17 February 1984) is a South African former international cricketer, and a current commentator.",
      creator: "Self",
      imgURL: "/assets/images/ABD.png"
    });
    this.contentList.add({
      id:3,
      title:"MS Dhoni",
      description: "Dhoni is primarily known for his role as a wicketkeeper-batsman. He is regarded as one of the best finishers in limited-overs cricket.",
      creator: "Keshav Banerjee",
      imgURL: "/assets/images/Dhoni.jpeg"
    });
  }
}