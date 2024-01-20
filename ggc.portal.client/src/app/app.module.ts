import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule, DxTextBoxModule, DxResponsiveBoxModule, DxCheckBoxModule, DxMenuModule, DxSelectBoxModule, DxGalleryModule, DxTileViewModule } from 'devextreme-angular';
import { HeaderNavComponent } from 'src/app-shell/header-nav/header-nav.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app-shell/footer/footer.component';
import { HomeComponent } from 'src/app-shell/home/home.component';
import { HeaderTitleComponent } from 'src/app-shell/header-title/header-title.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterComponent,
    HomeComponent,
    HeaderTitleComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    DxButtonModule,
    DxToolbarModule,
    DxGalleryModule,
    DxTextBoxModule,
    DxResponsiveBoxModule,
    DxTileViewModule,
    DxMenuModule, DxSelectBoxModule, DxCheckBoxModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
