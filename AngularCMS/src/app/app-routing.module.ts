import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CmsCreateprojectComponent } from './cms-software/cms-administration/cms-create-project/cms-create-project.component';
import { CmsCreateEmployeeComponent } from './cms-software/cms-administration/cms-create-employee/cms-create-employee.component';
import { CmsCreateUserComponent } from './cms-software/cms-administration/cms-create-user/cms-create-user.component';
import { CmsSoftwareComponent } from './cms-software/cms-software.component';
import { CmsDashboardsComponent } from './cms-software/cms-dashboards/cms-dashboards.component';
import { CmsAdministrationComponent } from './cms-software/cms-administration/cms-administration.component';
import { CmsCreateWorkmenComponent } from './cms-software/cms-administration/cms-create-workmen/cms-create-workmen.component';


const routes: Routes = [


  { path: 'Login', component: LoginComponent},
  { path: 'CMSHome', component : CmsSoftwareComponent,
    children: 
    [
      { path: '', component : CmsDashboardsComponent },
      { path: 'CmsAdministration', component : CmsAdministrationComponent,
        children:
        [
          { path: 'CMSCreateProject', component : CmsCreateprojectComponent },
          { path: 'CMSCreateEmployee', component : CmsCreateEmployeeComponent},
          { path: 'CMSCreateUser', component : CmsCreateUserComponent},
          { path: 'CMSCreateWorkmen', component : CmsCreateWorkmenComponent}  
        ]
      },
          
    ]
  },
  { path: '',  redirectTo: '/Login', pathMatch: 'full' },
  { path: '**',  redirectTo: '/Login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
