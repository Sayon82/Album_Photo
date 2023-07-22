import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LayoutComponent } from './layout/layout.component';
import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HttpClientModule } from '@angular/common/http';
import { ActualiteComponent } from './actualite/actualite.component';
import { VoirComponent } from './voir/voir.component';
import { AlbumPhotoComponent } from './album-photo/album-photo.component';
import { DetailPhotoComponent } from './detail-photo/detail-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    LayoutComponent,
    ContactComponent,
    InscriptionComponent,
    ConnexionComponent,
    ActualiteComponent,
    VoirComponent,
    AlbumPhotoComponent,
    DetailPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
