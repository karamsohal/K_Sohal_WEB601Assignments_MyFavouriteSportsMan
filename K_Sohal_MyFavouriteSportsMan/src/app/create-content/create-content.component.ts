import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { Event } from '@angular/router';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [NgIf],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {
  @Output() createContent = new EventEmitter<Promise<Content>>();
  invalidRequest: boolean|null = false;
  onSubmit(e:SubmitEvent, content: Content ) {

    const sendContent = new Promise<any>((resolve,reject)=>{
      setTimeout(() => {
        if(content.title ==="" || content.creator==="" || content.description==="" || isNaN(content.id)){
          this.invalidRequest = true;
          reject();
        }
        else {
          console.log('Content added successfully:', content.title);
          resolve(content);
          this.invalidRequest = false;
        }
      }, 1000);
    })
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    this.createContent.emit(sendContent);
  }
}