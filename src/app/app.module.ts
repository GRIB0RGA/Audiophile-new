import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShellModule } from './modules/shell/shell.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ShellModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
// BrowserAnimationsModule, // rato mushaobs aq da ara sxvagan
