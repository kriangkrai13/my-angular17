import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./template/header/header.component";
import { FooterComponent } from './template/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true, // ✅ เป็น Standalone Component
  imports: [RouterOutlet, HeaderComponent, FooterComponent], // ✅ ต้อง import RouterOutlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular17';
}
