import { Component, OnInit , OnChanges, SimpleChange, SimpleChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContinentserviceService } from '../continentservice.service';


@Component({
  selector: 'app-worldchildren',
  templateUrl: './worldchildren.component.html',
  styleUrls: ['./worldchildren.component.css']
})
export class WorldchildrenComponent implements OnInit{

  mycontinent:string="Asia";
  continents:any;
  countries:any;
  link:any;
  // item:any;
  // item_parent:any;

  constructor(private worldservice:ContinentserviceService,private route:ActivatedRoute, private router: Router) { }
 
  
  ngOnInit(){
    this.worldservice.getContinents()
      .subscribe((data) =>this.continents=data)
  }

  // getcontinents(){
  //   this.worldservice.getContinents()
  //     .subscribe((data) =>this.continents=data)
  // }

  getcountriesdata(item:string){
    this.mycontinent=item;
    // this.link=item;
    console.log("entered into countries");
    console.log(this.mycontinent);
    this.worldservice.getcountries(this.mycontinent).subscribe(data=>this.countries=data);
    this.router.navigate(['countries'],{relativeTo:this.route});
  }

  get continent(){
    return this.mycontinent;
  }

  set continent(value){
    this.mycontinent=value;
  }


  // delete(item: any,item_parent: any){
  //   console.log(item);
  //   console.log(item_parent);
  //   this.worldservice.deleteservice(item,item_parent).subscribe((data: any)=>{
  //     console.log(data)});
  //  alert("deleted successfully");
  // //  this.router.navigate(['World'],{relativeTo:this.route});
  // }
}
