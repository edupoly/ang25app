import { Component, inject, OnInit } from '@angular/core';
import { CropService } from '../../../core/crop.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cropsmaster.component.html',
  styleUrl: './cropsmaster.component.css',
})
export class CropsmasterComponent implements OnInit {
  private cropService = inject(CropService);
  crops: any[] = [];

  ngOnInit(): void {
    this.cropService.getAllCrops().subscribe({
      next: (data) => {
        this.crops = data;
        console.log(this.crops);
      },
      error: (err) => {
        console.error('Error fetching all crops', err);
      },
    });
  }
}
