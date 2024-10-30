import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ChatbotUIComponent } from './chatbot-ui/chatbot-ui.component';
import { HeaderComponent } from './header/header.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { EditProfileComponent } from './userprofile/edit-profile/edit-profile.component';
import { HelpcompComponent } from './helpcomp/helpcomp.component';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
  declarations: [
    AppComponent,
    ChatbotUIComponent,
    
    HeaderComponent,
    UserprofileComponent,
    EditProfileComponent,
    HelpcompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
MatCardModule ,
CommonModule ,
MatFormFieldModule,
MatIconModule ,
MatSidenavModule,
MatListModule ,
FormsModule,
ReactiveFormsModule,
HttpClientModule,
MatExpansionModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
