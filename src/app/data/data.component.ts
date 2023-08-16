import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
fname='Rahul'
lname='Kumar'
flag=false;
  courses=[
{title:'HTML',fee:2500,duration:1,sdate:'01/05/2023',image:'/assets/html.jpg'},
{title:'CSS',fee:3000,duration:2,sdate:'02/05/2023',image:'/assets/css.png'},
{title:'JS',fee:3500,duration:4,sdate:'03/05/2023',image:'/assets/js.png'},
{title:'Python',fee:5000,duration:5,sdate:'04/05/2023',image:'/assets/python.jpg'},
{title:'Angular',fee:6500,duration:3,sdate:'05/05/2023',image:'/assets/angular.png'},
 ]

showHide(){
  if(this.flag){
    this.flag=false;
  }
  else{
    this.flag=true;
  }
}

}
