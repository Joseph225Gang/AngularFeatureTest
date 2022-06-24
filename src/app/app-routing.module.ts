import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { HeroComponent } from './hero/hero.component';
import { AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: 'hero/list', component:HeroComponent, canActivate: [AuthGuard]},
  {path:'demo',component:DemoComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
