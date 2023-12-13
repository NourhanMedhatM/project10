import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { HomeComponent } from './home/home.component';
import { HousinglocationComponent } from './housinglocation/housinglocation.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [{ path: '', component: HomeComponent },
  
{ path: 'add', component: AdduserComponent },


{ path: 'view/:id', component: HousinglocationComponent },

{ path: 'edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
