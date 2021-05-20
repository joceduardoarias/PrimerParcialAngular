import { Component, OnInit } from '@angular/core';
import {HttpService  } from "../../services/http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre:string = "";
  id :string = "";
  url: string="";
  img: string = "";
  constructor( private http: HttpService) { }

  ngOnInit(): void {
    this.http.obtenerData().subscribe((data:any)=>{
        console.log(data);
        this.nombre = data.login;
        this.id = data.id;
        this.url = data.url;
        this.img = data.avatar_url
    });
    
    console.log(localStorage.getItem("usuario"));        
    
  }

}
