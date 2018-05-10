import { Injectable } from "@angular/core";
import { Response, Headers } from '@angular/http'
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {parseHttpResponse} from "selenium-webdriver/http";

@Injectable()

export class PeticionesService{

  public url:string;

  constructor(
    private _http:HttpClient
  ){
    this.url = "https://jsonplaceholder.typicode.com/posts";
  }

  getPrueba(){
    return "Hola mundo desde el servicio";
  }

  getArticulos(){
    //return this._http.get(this.url).map(response => response.json());
    return this._http.get(this.url);
  }

}
