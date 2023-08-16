import { Component } from '@angular/core';
import{ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  course:string='';
  result=false;

  constructor(private router:ActivatedRoute)
  {
      this.router.params.subscribe(res=>{this.course=res['tag']})
  }
  onSubmit(data:any)
  {
    console.log(data);
    this.result=true;
  }

}
