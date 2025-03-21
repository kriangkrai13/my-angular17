import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // ✅ ใช้ RouterModule
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent], // ✅ AppComponent ห้ามใช้ standalone: true
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // ✅ กำหนด Routing ให้แอป
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent], // ✅ Bootstrap ด้วย AppComponent
})
export class AppModule {}