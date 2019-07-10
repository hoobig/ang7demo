import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { NotifyComponent } from './notify/notify.component';

const routes: Routes = [
{
    path: 'about',
    component: AboutComponent,
    data: {
        title: 'About page',
        metas: [
        { name: 'author',   content: 'bigdeveloper.com'},
        { name: 'keywords', content: 'about'},
        { name: 'description', content: 'This is my about!' }
        ]
    },
},
{
    path: 'notify',
    component: NotifyComponent,
    data: {
        title: 'Notify page',
        metas: [
        { name: 'author',   content: 'bigdeveloper.com'},
        { name: 'keywords', content: 'notify'},
        { name: 'description', content: 'This is my notify!' }
        ]
    },
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
