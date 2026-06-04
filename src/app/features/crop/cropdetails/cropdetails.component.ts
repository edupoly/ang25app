import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CropService } from '../../../core/crop.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cropdetails',
  imports: [CommonModule],
  templateUrl: './cropdetails.component.html',
  styleUrl: './cropdetails.component.css',
})
export class CropdetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cropService = inject(CropService);
  cropId: string | null = null;
  crop: any = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.cropId = params.get('id');
      if (this.cropId) {
        this.cropService.getCropById(this.cropId).subscribe({
          next: (data) => {
            this.crop = data;
          },
          error: (err) => {
            console.error('Error fetching crop details', err);
          },
        });
      }
    });
  }
  purchaseProduct() {
    if (this.crop) {
      this.router.navigate(['/purchaseOrder'], { state: { crop: this.crop } });
    }
  }
}
