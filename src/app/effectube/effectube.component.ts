import { Component,Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-effectube',
  templateUrl: './effectube.component.html',
  styleUrls: ['./effectube.component.css']
})
export class EffectubeComponent implements OnInit {

  description="";

  vdget1="Angular Tutorial - 1 - Introduction";
  vdget2="Angular Tutorial - 2 - Introduction";
  vdget3="HTML & CSS Tutorial - 1 - Introduction";
  vdget4="CSS Tutorial - 1 - Introduction";
  vdget5="REACTJS Tutorial - 1 - Introduction";
  vdget6="PYTHON Tutorial - 1 - Introduction";
  vdget7="JAVA Tutorial - 1 - Introduction";
  vdget8="C-LANGUAGE Tutorial - 1 - Introduction";
  vdget9="C++ Tutorial - 1 - Introduction";

 

  comment = [
    {vdget:'Angular Tutorial - 1 - Introduction',color1:'rgb(127, 252, 173)'},
  ];
    


  @ Input()
  url: string = "https://www.youtube.com/embed/K302tpYOfgw?autoplay=1";

  url1: string="https://www.youtube.com/embed/5xg4Jvqy_UI?autoplay=1";

  url2: string="https://www.youtube.com/embed/OQ2448utWIEautoplay=1";

  url3: string="https://www.youtube.com/embed/yfoY53QXEnIautoplay=1";

  url4: string="https://www.youtube.com/embed/bMknfKXIFA8autoplay=1";

  url5: string="https://www.youtube.com/embed/_uQrJ0TkZlcautoplay=1";

  url6: string="https://www.youtube.com/embed/wdkP056q0Ncautoplay=1";

  url7: string="https://www.youtube.com/embed/8PopR3x-VMYautoplay=1";

  url8: string="https://www.youtube.com/embed/vLnPwxZdW4Yautoplay=1";

  urlSafe: SafeResourceUrl | undefined;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    
  }

  video(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.description = this.vdget1;
  }
  video1(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url1);
    this.description = this.vdget2;
  }

  video2(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url2);
    this.description = this.vdget3;
  }

  video3(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url3);
    this.description = this.vdget4;
  }

  video4(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url4);
    this.description = this.vdget5;
  }

  video5(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url5);
    this.description = this.vdget6;
  }

  video6(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url6);
    this.description = this.vdget7;
  }

  video7(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url7);
    this.description = this.vdget8;
  }

  video8(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url8);
    this.description = this.vdget9;
  }



}

 


 
