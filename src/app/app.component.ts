import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RybyComponent } from './ryby/ryby.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RybyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testowy-angular-1';
}
