import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';
import { DataComponent } from './data/data.component';
import { ListComponent } from './list/list.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';




const routes: Routes = [
{path:'about',component:AboutComponent},
{path:'data',component:DataComponent},
{path:'form/:tag',component:FormComponent},
{path:'info/:course/:fee/:duration',component:DetailComponent},
{path:'list',component:ListComponent},
{path:'contact',component:ContactComponent},
{path:'feedback',component:FeedbackComponent},


  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
