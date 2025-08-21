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
  count = signal(0);
  inc() {
    // this.count.set(this.count() + 1);
    this.count.update((cv) => cv + 1);
  }
  dec() {
    this.count.update((cv) => cv - 1);
  }
}
