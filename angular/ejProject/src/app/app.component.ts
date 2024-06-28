import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

interface Element{
  title:string;
  subtitle:string;
  image:string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Appgrid';

  public elementlist: Element[]=[];
  ngOnInit(): void {
    this.elementlist =[
      {title:'Video 1', subtitle:'Subtitulo video 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit feugiat risus vitae elementum. Vivamus eget egestas eros. Sed mattis.', image:'https://i.ytimg.com/vi/n1wUYGvCOkA/maxresdefault.jpg'},
      {title:'Video 2', subtitle:'Subtitulo video 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit feugiat risus vitae elementum. Vivamus eget egestas eros. Sed mattis.', image:'https://media.istockphoto.com/id/1139617561/zh/%E7%85%A7%E7%89%87/%E7%99%BD%E8%89%B2%E5%BE%A9%E6%B4%BB%E7%AF%80%E5%85%94%E5%AD%90%E9%A8%8E%E8%91%97%E9%80%81%E7%A6%AE%E7%89%A9%E5%85%94%E5%AD%90%E5%9C%A8%E8%BB%8A%E4%B8%8A%E7%9A%84%E6%96%B9%E5%90%91%E7%9B%A4%E5%BE%8C%E9%9D%A2%E7%9A%84%E9%A7%95%E9%A7%9B%E5%BA%A7%E4%B8%8A%E9%9A%B1%E8%97%8F%E5%8F%B8%E6%A9%9F.jpg?s=2048x2048&w=is&k=20&c=RGY3JoW3wCJcImEdGDT9T2vUOcaCIexwnF14GboLjvw='},
      {title:'Video 3', subtitle:'Subtitulo video 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit feugiat risus vitae elementum. Vivamus eget egestas eros. Sed mattis.', image:'https://i.pinimg.com/564x/41/4b/70/414b703f1dec23e627f4932da20e5543.jpg'},
      {title:'Video 4', subtitle:'Subtitulo video 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit feugiat risus vitae elementum. Vivamus eget egestas eros. Sed mattis.', image:'https://wallpaperaccess.com/full/192246.jpg'},
      {title:'Video 5', subtitle:'Subtitulo video 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit feugiat risus vitae elementum. Vivamus eget egestas eros. Sed mattis.', image:'https://as2.ftcdn.net/v2/jpg/05/81/88/63/1000_F_581886343_5UMhXzWzBdeecZz28z3ok5kiaHiCwt5v.jpg'},
      {title:'Video 6', subtitle:'Subtitulo video 6: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit feugiat risus vitae elementum. Vivamus eget egestas eros. Sed mattis.', image:'https://i.pinimg.com/originals/b1/5b/01/b15b0113582ad3bb09c8a6b9a413e783.jpg'}
    ]
    throw new Error('Method not implemented.');
  }

}
