import { Routes } from "@angular/router";
import { DashboardComponent} from "./components/dashboard/dashboard.component";
import { ListComponent } from "./components/list/list.component";
import { AddComponent} from "./components/add/add.component";

export const routes: Routes=[
    {path: 'dashboard', component: DashboardComponent},
    {path: 'add', component: AddComponent},
    {path: 'list', component: ListComponent},
    {path: "", redirectTo:'dashboard', pathMatch:'full'}

]