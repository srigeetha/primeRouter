import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputComponent } from './input/input.component';
import { DataComponent } from './data/data.component';
import { PanelComponent } from './panel/panel.component';
import { OverlayComponent } from './overlay/overlay.component';
import { FileComponent } from './file/file.component';
import { MenuComponent } from './menu/menu.component';
import { ChartsComponent } from './charts/charts.component';
import { MessagesComponent } from './messages/messages.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { MiscComponent } from './misc/misc.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { 
  RadioButtonModule,
  ProgressBarModule,
  CheckboxModule,
  ButtonModule,
  PaginatorModule,
  AccordionModule,
  TabViewModule,
  PanelModule,
  SidebarModule,
  FileUploadModule,
  MenuModule,
  TabMenuModule,
  ChartModule,
  MessagesModule,
  MessageModule,
  GrowlModule,
  GalleriaModule,
  DragDropModule,
  DataGridModule,
  TreeTableModule,
  ProgressSpinnerModule,
  InplaceModule,
  DialogModule,
  ConfirmDialogModule,
  StepsModule
 } from 'primeng/primeng';
import {CommonModule} from '@angular/common';

import { ConfirmationService,MenuItem } from 'primeng/api';
import { MiscService } from './misc/miscService';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ButtonsComponent,
    InputComponent,
    DataComponent,
    PanelComponent,
    OverlayComponent,
    FileComponent,
    MenuComponent,
    ChartsComponent,
    MessagesComponent,
    MultimediaComponent,
    DragndropComponent,
    MiscComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,       
    AngularFontAwesomeModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule,
    PaginatorModule,
    AccordionModule,
    TabViewModule,
    PanelModule,
    SidebarModule,
    FileUploadModule,
    MenuModule,
    TabMenuModule,
    ChartModule,
    MessagesModule,
    MessageModule,
    GrowlModule,
    GalleriaModule,
    DragDropModule,
    DataGridModule,
    TreeTableModule,
    ProgressSpinnerModule,
    InplaceModule,
    DialogModule,
    ConfirmDialogModule,
    ProgressBarModule,
    StepsModule
  ],
  providers: [
    ConfirmationService,
    MiscService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
