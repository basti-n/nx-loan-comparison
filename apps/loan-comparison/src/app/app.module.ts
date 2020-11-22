import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UiModule } from '@ui';
import { CalculatorModule } from './components/calculator/calculator.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, UiModule, CalculatorModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
