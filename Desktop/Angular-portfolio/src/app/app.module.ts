import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AboutComponent } from './componentes/about/about.component';
import { EducationComponent } from './componentes/education/education.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ContactComponent } from './componentes/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
