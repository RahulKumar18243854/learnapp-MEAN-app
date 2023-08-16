import { Component } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
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
