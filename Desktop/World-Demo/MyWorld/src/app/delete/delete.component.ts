import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContinentserviceService } from '../continentservice.service';
import { Region } from '../region';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  region:Region=new Region();
  createDeleteForm!: FormGroup;
  
  // continents:any;
  // countries:any;

  public input:any;
  public input1:any;
  continents={};
  countries:any;
  message: void;
  createDeleteForm1: any;

  
  
  constructor(private worldservice:ContinentserviceService,private router:Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.createDeleteForm=this.fb.group({
    //   category:[''],
    //   continent:[''],
    //   country:['']
    // })
    this.createDeleteForm = new FormGroup({
      category:new FormControl(''),
      parent:new FormControl(''),
      place:new FormControl(''),
    });

    this.input={
      'category':'',
      'children':[],
      'parent':'',
      'place':''
    }

    this.input1={
      'category':'',
      'children':[],
      'parent':'',
      'place':''
    }
  }

  deletetheregion(){
    console.log(this.createDeleteForm.value);
   console.log("deleting the region");
   let item1=this.createDeleteForm.value.place;
   let item2=this.createDeleteForm.value.parent;
   console.log(item1);
   console.log(item2);
   let resp=this.worldservice.deletetheregion(item1,item2);
   alert("Region deleted successfully");
   resp.subscribe((data)=>this.message);
   this.router.navigate(['/World']);
  }

  // onChangeCategory(cateogryid: any){
  //   this.selecteditem=cateogryid.target.value;
  //   console.log(this.selecteditem);
  //   console.log(cateogryid.target.value);
  //   if(this.selecteditem=='continent'){
  //     this.continents.children=["World","null"];
  //     console.log(this.continents.children);
  //   }
  //   else 
  //   {
  //     this.worldservice.getContinents()
  //     .subscribe((data) =>this.continents=data);
  //      console.log(this.continents);
  //   }
  // }

  // onChangeContinent(continentid:any){
  //   console.log(continentid);
  //   console.log(continentid.target);
  //   console.log(continentid.target.value);
  //   this.worldservice.getcountries(continentid.target.value)
  //   .subscribe((data)=>this.countries=data);
  //   console.log(this.countries);
  // }
  

  onChangeCategory(item:any){
    console.log(item);
    if(item=='continent'){
      this.input1.children=["World","null"];
      console.log(this.input1.children);
    }
    else 
    {
      this.worldservice.getContinents()
      .subscribe((data)=>this.input1=data);
    }
  }

  onChangeContinent(item:any){
    console.log(item);
    this.worldservice.getcountries(item)
    .subscribe((data)=>this.input=data);
    console.log(this.input);
  }

}
