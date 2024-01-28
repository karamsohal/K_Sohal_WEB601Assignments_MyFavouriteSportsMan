import { Content } from "./content-interface";

export class ContentList{
    private contents:Content[];
    constructor(){
        this.contents = [];
    }
    get getContent(){
        return this.contents;
    }
    add(content: Content){
        this.contents.push(content);
    }
    getContentLength(){
        return this.contents.length;
    }
    getContentByIndex(index: number){
        if(index <= this.getContentLength()){
            const {title, description, creator, imgURL} = this.contents[index]; 
            return `<div class="card_container">
                <img src=${imgURL} alt="${title} image"/>
                <h2>${title}</h2>
                <p>${description}</p>
                <p><b>Founder:</b> ${creator}</p>
            </div>`;
        } else{
            return "<div><p>Content not found</p></div>";
        }
    }
}