import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dash', component: DashboardComponent,children:[
  { path: 'button', component:ButtonsComponent },
  { path: 'input', component: InputComponent },
  { path: 'data', component: DataComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'over', component:OverlayComponent },
  { path: 'file', component: FileComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'chart', component: ChartsComponent },
  { path: 'message', component:MessagesComponent },
  { path: 'multi', component: MultimediaComponent },
  { path: 'drag', component: DragndropComponent },
  { path: 'misc', component: MiscComponent }
]},
  
];
@NgModule({
  imports:[
    RouterModule.forRoot(routes)
   ],
   exports: [RouterModule]
})

export class AppRoutingModule { }
