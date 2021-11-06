import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ItserviceComponent } from './itservice/itservice.component';
import { MenuComponent } from './menu/menu.component';
import { ApplypositionComponent } from './applyposition/applyposition.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { DevappsComponent } from './devapps/devapps.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { GallaryComponent } from './gallary/gallary.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { CareerComponent } from './career/career.component';
import { BlogComponent } from './blog/blog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonComponent } from './common/common.component';
import { JobnameaddComponent } from './jobnameadd/jobnameadd.component';
import { JobnamelistComponent } from './jobnamelist/jobnamelist.component';
import { NgxSummernoteModule } from 'ngx-summernote';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { JobdetailsaddComponent } from './jobdetailsadd/jobdetailsadd.component';
import { NgxTrimDirectiveModule } from 'ngx-trim-directive';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NgImageSliderModule } from 'ng-image-slider';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ItserviceComponent,
    MenuComponent,
    ApplypositionComponent,
    ContactComponent,
    ConsultingComponent,
    DevappsComponent,
    AboutusComponent,
    FooterComponent,
    GallaryComponent,
    SidemenuComponent,
    CareerComponent,
    BlogComponent,
    LoginComponent,
    DashboardComponent,
    CommonComponent,
    JobnameaddComponent,
    JobnamelistComponent,
    JobdetailsComponent,
    JobdetailsaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxSummernoteModule,
    RichTextEditorModule,
    NgxTrimDirectiveModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    // MatCarouselModule.forRoot(),
    NgImageSliderModule,    
    ShareButtonsModule,
    ShareIconsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
