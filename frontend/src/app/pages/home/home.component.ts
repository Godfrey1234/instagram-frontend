import { Component, OnInit } from '@angular/core';
import { AweInterface } from 'src/app/interface/awe-interface';
import { AweServiceService } from 'src/app/service/awe-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})




export class HomeComponent implements OnInit {

  constructor(private service:AweServiceService) { }

  tittle:any;





  ngOnInit(): void {
    
    this.tittle = localStorage.getItem("token");
   
 
  }

}