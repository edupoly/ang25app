import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeformComponent } from './employeeform/employeeform.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang25app';
}
