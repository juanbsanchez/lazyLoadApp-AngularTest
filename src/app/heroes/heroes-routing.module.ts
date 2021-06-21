import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./pages/list/list.component";
import {AddComponent} from "./pages/add/add.component";
import {SearchComponent} from "./pages/search/search.component";
import {HeroeComponent} from "./pages/heroe/heroe.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'edit/:id',
        component: AddComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: ':id',
        component: HeroeComponent
      },

      /** otherwise redirect to list **/

      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingModule { }