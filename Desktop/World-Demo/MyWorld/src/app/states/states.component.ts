import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ContinentserviceService } from '../continentservice.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  @Input() states:any;
  constructor(private worldservice:ContinentserviceService) { }

  ngOnInit(): void {
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
