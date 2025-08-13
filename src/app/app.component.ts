import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang25app';
  num: any;
  gender = null;
  maleimage =
    'https://img.freepik.com/premium-photo/generative-ai-male-cyborg-with-artificial-intelligence-concept-dark-background_634053-2773.jpg';
  femaleimage =
    'https://img.freepik.com/premium-photo/woman-with-ai-network-her-head-generated-by-ai_793210-2393.jpg?w=360';
}
