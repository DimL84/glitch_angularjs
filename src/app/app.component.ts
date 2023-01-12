import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

import {
  faRightToBracket,
  faHouse,
  faBed,
  faCommentDots,
  faChartLine,
  faPersonBiking

} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit{
  
  title = 'Glit_Ch';
  currentUrl: string;

  // solid icon
  faRightToBracket = faRightToBracket ;
  faBed = faBed ;
  faCommentDots = faCommentDots ;
  faHouse = faHouse ;
  faChartLine = faChartLine;
  faPersonBiking = faPersonBiking;



  //img Links
  public partnerTab: [{ "img_url": string, "img_url_alt": string, "img_width": string, "img_height": string, "img_extension": string, }]

  ngOnInit(): void {
    this.CheckUserLogin();
    this.LoadData();
  }

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute){
    
    //stock current url
    this.currentUrl = "/accueil";
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.currentUrl = event.url;
      }
    })
    
    // tab Partner
    this.partnerTab = [{"img_url": "", "img_url_alt": "", "img_width": "", "img_height": "", "img_extension": "", }]
  
  }


  //function load the data
  LoadData(){
    return this.http.get("assets/data/data.json")
    .subscribe((data) =>{
      let jsonObj = Object.create(data);
      this.partnerTab = jsonObj["footer"]["partner"];
    });
  }
  //function redirage page login
  CheckUserLogin(){
    this.router.navigate(['accueil']);
  }
}
