import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './errors/error404/error404.component';
import { Error500Component } from './errors/error500/error500.component';
import { CmsSoftwareComponent } from './cms-software/cms-software.component';
import { CmsAdministrationComponent } from './cms-software/cms-administration/cms-administration.component';
import { CmsCreateprojectComponent } from './cms-software/cms-administration/cms-create-project/cms-create-project.component';
import { CmsCreateUserComponent } from './cms-software/cms-administration/cms-create-user/cms-create-user.component';
import { CmsSharedComponent } from './cms-software/cms-shared/cms-shared.component';
import { CmsLeftMenuComponent } from './cms-software/cms-shared/cms-left-menu/cms-left-menu.component';
import { CmsHeaderComponent } from './cms-software/cms-shared/cms-header/cms-header.component';
import { CmsFooterComponent } from './cms-software/cms-shared/cms-footer/cms-footer.component';
import { CmsCreateEmployeeComponent } from './cms-software/cms-administration/cms-create-employee/cms-create-employee.component';
import { CmsCreateWorkmenComponent } from './cms-software/cms-administration/cms-create-workmen/cms-create-workmen.component';
import { CmsCreateCategoryComponent } from './cms-software/cms-administration/cms-create-category/cms-create-category.component';
import { CmsDashboardsComponent } from './cms-software/cms-dashboards/cms-dashboards.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Error404Component,
    Error500Component,
    CmsSoftwareComponent,
    CmsAdministrationComponent,
    CmsCreateprojectComponent,
    CmsCreateUserComponent,
    CmsSharedComponent,
    CmsLeftMenuComponent,
    CmsHeaderComponent,
    CmsFooterComponent,
    CmsCreateEmployeeComponent,
    CmsCreateWorkmenComponent,
    CmsCreateCategoryComponent,
    CmsDashboardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
