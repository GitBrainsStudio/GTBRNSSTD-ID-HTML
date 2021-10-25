import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserNewPageComponent } from '../user-new-page/user-new-page.component';


const routes: Routes = [
    
    { 
        path: '', 
        component: UserNewPageComponent 
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserNewPageRoutingModule {}