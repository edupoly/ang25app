import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang25app';
  a = signal(230);
  inc34() {
    // this.a.set(Math.random());
    this.a.update((ov) => {
      return ov + 20;
    });
  }
}
