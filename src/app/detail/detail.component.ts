import { Component } from '@angular/core';
import{ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
marks=45;
subjects='maths';

course:string='';
fee:number=0;
duration:number=0;

constructor(private router:ActivatedRoute){
  this.router.params.subscribe(res=>
    {
      this.course=res['course'],
      this.fee=res['fee'],
      this.duration=res['duration']
    }
    )
}
}
