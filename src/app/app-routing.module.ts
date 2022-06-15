import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Playlist1Component } from './playlist1/playlist1.component';
import { ShearchComponent } from './shearch/shearch.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  { path: 'Songs', component: SongsComponent},
  { path: 'Shearch', component: ShearchComponent},
  { path: 'Albums', component: AlbumsComponent},
  { path: 'Playlist1', component: Playlist1Component},
  { path: 'Gallery' , component: GalleryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SongsComponent,ShearchComponent, AlbumsComponent, Playlist1Component, GalleryComponent];
