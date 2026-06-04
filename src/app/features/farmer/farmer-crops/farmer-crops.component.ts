import { Component, inject, OnInit } from '@angular/core';
import { CropService } from '../../../core/crop.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-farmer-crops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './farmer-crops.component.html',
  styleUrl: './farmer-crops.component.css',
})
export class FarmerCropsComponent implements OnInit {
  private cropService = inject(CropService);
  crops: any[] = [];

  ngOnInit(): void {
    this.cropService.getFarmerCrops().subscribe({
      next: (data) => {
        this.crops = data;
      },
      error: (err) => {
        console.error('Error fetching crops', err);
      },
    });
  }
}
