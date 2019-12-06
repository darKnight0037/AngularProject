import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveformsComponent } from '../app/reactiveforms/reactiveforms.component';
import { TemplateformsComponent } from '../app/templateforms/templateforms.component';
import { ProfileEditorComponent } from '../app/profile-editor/profile-editor.component';
import { FormControlFormBuilderComponent } from '../app/form-control-form-builder/form-control-form-builder.component';
const routes: Routes = [
  {path:'reactive',component:ReactiveformsComponent},
  {path:'template',component:TemplateformsComponent},
  {path:'proreactive',component:ProfileEditorComponent},
  {path:'formbuildereact',component:FormControlFormBuilderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ReactiveformsComponent,TemplateformsComponent,ProfileEditorComponent,FormControlFormBuilderComponent] 