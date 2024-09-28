import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthHomeComponent } from './views/auth-home/auth-home.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [{ path: '', component: AuthHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
