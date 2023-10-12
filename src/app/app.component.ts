import {  Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {


  title = 'embed-player';
  container!:any;
  options!: any
  @ViewChild('player', {static: true}) player!: ElementRef;


  ngOnInit(): void {
        this.options = {
          fluid: true,
          autoplay: true,
          sources: [
            {
              src: "https://mekya.github.io/web_test/paragliding_360.mp4",
              type: "video/mp4"
            }
          ],
          fill: true,
          poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TEcy1nIaNLj2VBuwGvUi1UjLP8gJhOM8h_J9oqb-jjHFpYMgaEHr_5d09zcD4YQ44F8&usqp=CAU"
    }
    
    this.player.nativeElement.setConfig(this.options)
  }

}
