import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Icontinent } from 'src/continent';
import { Region } from './region';

@Injectable({
  providedIn: 'root'
})
export class ContinentserviceService {

  springEndpoint: string | undefined;
  postEndpoint: string | undefined;
  deleteEndpoint: string;
  
  constructor(private http:HttpClient) {
    this.springEndpoint='/api/v1/getbyplace';
    this.postEndpoint='/api/v1/continent';
    this.deleteEndpoint='/api/v1/delete';
   }

  getContinents(){
    return this.http.get("/api/v1/getbyplace/World");
  }

  getcountries(link:string){
    return this.http.get(`${this.springEndpoint}/${link}`);
  }

  getstates(country:string){
    return this.http.get(`${this.springEndpoint}/${country}`);
  }

  postregion(region:Region){
    // console.log(form.value.parent);
    // console.log(form.value);
    console.log(region);
    console.log(region.parent);
    return this.http.post(`${this.postEndpoint}/${region.parent}`,region,{responseType:'text' as 'json'});
  }

  deletetheregion(place: any,parent: any){
    return this.http.delete(`${this.deleteEndpoint}/${place}/${parent}`,{responseType: 'text'});
  }


}
