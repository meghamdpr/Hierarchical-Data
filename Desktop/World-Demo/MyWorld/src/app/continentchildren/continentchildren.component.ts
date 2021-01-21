import { Component, OnInit, Input } from '@angular/core';
import { ContinentserviceService } from '../continentservice.service';

@Component({
  selector: 'app-continentchildren',
  templateUrl: './continentchildren.component.html',
  styleUrls: ['./continentchildren.component.css']
})
export class ContinentchildrenComponent implements OnInit {

  // @Input()
  // mycontinent!: string;
  @Input() countries:any;
  isDisplay=false;
  mycountry:string | undefined;
  states:any;
  constructor(private worldservice:ContinentserviceService) { }

  ngOnInit(){

  }

  // getstatesdata(item:string){
  //   this.country=item;
  //   // this.link=item;
  //   console.log("entered into states");
  //   console.log(this.country);
  //   this.worldservice.getstates(this.country).subscribe((data)=>this.states=data);
  // }

  getstatesdata(item:string){
    this.isDisplay=!this.isDisplay;
    this.mycountry=item;
    // this.link=item;
    console.log("entered into states");
    console.log(this.mycountry);
    this.worldservice.getstates(this.mycountry).subscribe((data)=>this.states=data);
    console.log(this.states);
  }

  // delete(item: any,item_parent: any){
  //   console.log(item);
  //   console.log(item_parent);
  //   this.worldservice.deleteservice(item,item_parent).subscribe((data: any)=>{
  //     console.log(data)});
  //  alert("deleted successfully");
  //  this.router.navigate(['World'],{relativeTo:this.route});
  // }

}
