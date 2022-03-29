import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from './navigation/navigation.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, NavigationModule],
  exports: [NavigationModule, FooterComponent],
})
export class ShellModule {}
