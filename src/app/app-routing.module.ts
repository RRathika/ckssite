import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApplypositionComponent } from './applyposition/applyposition.component';
import { BlogComponent } from './blog/blog.component';
import { CareerComponent } from './career/career.component';
import { CommonComponent } from './common/common.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevappsComponent } from './devapps/devapps.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ItserviceComponent } from './itservice/itservice.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { JobdetailsaddComponent } from './jobdetailsadd/jobdetailsadd.component';
import { JobnameaddComponent } from './jobnameadd/jobnameadd.component';
import { JobnamelistComponent } from './jobnamelist/jobnamelist.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'',redirectTo:'landing',pathMatch:'full'},
{path:'landing',component:LandingComponent},
{path:'itservice',component:ItserviceComponent},
{path:'jobapply/:name',component:ApplypositionComponent},
{path:'contact', component:ContactComponent},
{path:'consulting', component:ConsultingComponent},
{path:'devapps',component:DevappsComponent},
{path:'about',component:AboutusComponent},
{path:'gallery',component:GallaryComponent},
{path:'career',component:CareerComponent},
{path:'blog',component:BlogComponent},
{path:'adminlogin', component:LoginComponent},
{path:'admin', component:CommonComponent,
children:[
  {path:'dashboard', component:DashboardComponent},
  {path:'jobname',component:JobnameaddComponent},
  {path:'jobnamelist',component:JobnamelistComponent},
  {path:'joblist',component:JobdetailsComponent},
  {path:'joblistadd',component:JobdetailsaddComponent}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
