import { Component, OnInit } from '@angular/core';
import {HttpService  } from "../../services/http.service";
import { NgxSpinnerService } from "ngx-spinner";

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
  
  constructor( private http: HttpService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.http.obtenerData().subscribe((data:any)=>{
        console.log(data);
        this.nombre = data.login;
        this.id = data.id;
        this.url = data.url;
        this.img = data.avatar_url
    });
    
     /** spinner starts on init */
     this.spinner.show();

     setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.spinner.hide();
     }, 5000);
   }    

}
