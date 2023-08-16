// reactive form
import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
 feedbackForm:FormGroup;

constructor(private fb: FormBuilder) { 

this.feedbackForm = this.fb.group({
  fn: ['', [Validators.required,Validators.pattern('[A-Za-z]{2,10}')]],
  ln: [''],
  em: ['', [Validators.required,Validators.email]],
  msg: ['',[Validators.required,Validators.minLength(20)]]
});

}

 onSubmit() {
  console.log(this.feedbackForm.value);
} 
}
