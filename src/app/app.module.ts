// import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// sub components
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// component pages
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { HomeCountersComponent } from './home-counters/home-counters.component';
import { UserDataComponent } from './user-data/user-data.component';

// services
import { AuthService } from './auth.service';
import { AuthProjectEventsService } from './auth-project-events.service';
// Token related imports
import { AuthenticatorGuard } from './authenticator.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// update page buttons
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

// home page chart
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';

// paginataion, searching and sorting imports
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    CreateProjectComponent,
    UpdateProjectComponent,
    HomeCountersComponent,
    UserDataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    NgxChartsModule,
    ChartsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
  ],
  providers: [
    AuthService,
    AuthProjectEventsService,
    AuthenticatorGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
