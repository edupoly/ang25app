import { Component, inject, OnInit } from '@angular/core';
import { BuyerService } from '../../../core/buyer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buyer-purchases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buyer-purchases.component.html',
  styleUrl: './buyer-purchases.component.css',
})
export class BuyerPurchasesComponent implements OnInit {
  private buyerService = inject(BuyerService);
  purchases: any[] = [];

  ngOnInit(): void {
    this.loadPurchases();
  }

  loadPurchases(): void {
    this.buyerService.getBuyerPurchases().subscribe({
      next: (data) => (this.purchases = data),
      error: (err) => console.error('Error fetching purchases', err),
    });
  }
}
