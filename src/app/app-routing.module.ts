import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotUIComponent } from './chatbot-ui/chatbot-ui.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HeaderComponent } from './header/header.component';
import { EditProfileComponent } from './userprofile/edit-profile/edit-profile.component';
import { HelpcompComponent } from './helpcomp/helpcomp.component';

const routes: Routes = [
  { path: 'chatbot', component: ChatbotUIComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'editProfile', component: EditProfileComponent },
  { path: 'helpComp', component: HelpcompComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
