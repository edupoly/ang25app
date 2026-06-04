import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-farmer-dashboard',
  imports: [RouterLink, RouterModule],
  templateUrl: './farmer-dashboard.component.html',
  styleUrl: './farmer-dashboard.component.css',
})
export class FarmerDashboardComponent {}
