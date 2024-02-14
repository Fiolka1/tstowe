import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-ryby',
  standalone: true,
  imports: [CommonModule,NgForOf],
  templateUrl: './ryby.component.html',
  styleUrl: './ryby.component.css'
 
})
export class RybyComponent {
  ryby=["łosoś","dorsz","karp","karaś"];
  karasisko=2010;
  /**
   * name
   */
  public rybenki() {
    for (let index = 0; index < 3; index++) {
      document.write(this.ryby[index]+"<br>");
      
    }
  }
}
