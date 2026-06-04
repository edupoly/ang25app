import { Component, inject, OnInit } from '@angular/core';
import { CropService } from '../../../core/crop.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-farmer-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './farmer-orders.component.html',
  styleUrl: './farmer-orders.component.css',
})
export class FarmerOrdersComponent implements OnInit {
  private cropService = inject(CropService);
  orders: any[] = [];

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.cropService.getFarmerOrders().subscribe({
      next: (data) => (this.orders = data),
      error: (err) => console.error('Error fetching farmer orders', err),
    });
  }
}
