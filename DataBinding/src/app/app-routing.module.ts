import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from '../app/event/event.component';
import { InterpolationComponent } from '../app/interpolation/interpolation.component';
import { OneWayComponent } from '../app/one-way/one-way.component';
import { TwoWayComponent } from '../app/two-way/two-way.component';
import { PropertyBindingComponent } from '../app/property-binding/property-binding.component';
import { ClassBindingComponent } from 'src/app/class-binding/class-binding.component';
const routes: Routes = [
  {path: 'oneway', component:OneWayComponent},
  {path: 'twoway',component:TwoWayComponent},
  {path: 'interpolation',component:InterpolationComponent},
  {path: 'event',component:EventComponent},
  {path: 'property',component:PropertyBindingComponent},
  {path: 'class',component:ClassBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OneWayComponent, TwoWayComponent, InterpolationComponent, EventComponent,PropertyBindingComponent,ClassBindingComponent] 
