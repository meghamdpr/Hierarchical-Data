import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder} from '@angular/forms';
import { ContinentserviceService } from '../continentservice.service';
import { Region } from '../region';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addregion',
  templateUrl: './addregion.component.html',
  styleUrls: ['./addregion.component.css']
})
export class AddregionComponent implements OnInit {

  region:Region=new Region();
  message:any;
  continents:any;
  // dropDownForm!: FormGroup;
  countries: any;
  selecteditem:any;
  constructor(private worldservice:ContinentserviceService,private router:Router,private fb: FormBuilder) { }

  ngOnInit(): void {

    // this.dropDownForm=this.fb.group({
    //   category:[''],
    //   continent:[''],
    //   country:['']
    // })
    // this.dropDownForm=new FormGroup({
    //   // category:new FormControl(),
    //   parent:new FormControl(),
    //   place:new FormControl(),
    //   children:new FormControl()
    // })
  }

 

  regionaddtion(){
   console.log("adding the region");
   let resp=this.worldservice.postregion(this.region);
   alert("Region added successfully");
   resp.subscribe((data)=>this.message);
   this.router.navigate(['/World']);
  }


  onChangeCategory(cateogryid: any){
    this.selecteditem=cateogryid.target.value;
    console.log(this.selecteditem);
    console.log(cateogryid.target.value);
    if(this.selecteditem=='continent'){
      this.continents.children=["World","null"];
      console.log(this.continents.children);
    }
    else 
    {
      this.worldservice.getContinents()
      .subscribe((data) =>this.continents=data);
       console.log(this.continents);
    }
  }

  onChangeContinent(continentid:any){
    console.log(continentid);
    console.log(continentid.target);
    console.log(continentid.target.value);
    this.worldservice.getcountries(continentid.target.value)
    .subscribe((data)=>this.countries=data);
    console.log(this.countries);
  }

  // getcontinents(){
  //   this.worldservice.getContinents()
  //   .subscribe((data) =>this.continents=data);
  // }

}
