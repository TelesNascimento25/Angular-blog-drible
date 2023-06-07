import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './componente/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './componente/menu-title/menu-title.component';
import { BigCardComponent } from './componente/big-card/big-card.component';
import { SmallCardComponent } from './componente/small-card/small-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
