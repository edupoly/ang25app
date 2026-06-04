import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyerService } from '../../../core/buyer.service';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-purchaseorder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './purchaseorder.component.html',
  styleUrl: './purchaseorder.component.css',
})
export class PurchaseorderComponent implements OnInit {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private buyerService = inject(BuyerService);

  crop: any = null;
  purchaseForm!: FormGroup;

  ngOnInit(): void {
    this.crop = history.state?.crop;

    this.purchaseForm = this.fb.group({
      farmer: [this.crop?.farmer?._id || '', Validators.required],
      cropId: [this.crop?._id || '', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      contactNumber: null,
      notes: '',
      totalAmount: [
        this.crop?.price || 0,
        [Validators.required, Validators.min(0)],
      ],
    });
  }

  onSubmit() {
    if (this.purchaseForm.valid) {
      this.purchaseForm.patchValue({
        totalAmount:
          this.crop?.priceHistory[0].price * this.purchaseForm.value.quantity,
      });

      this.buyerService.purchaseCrop(this.purchaseForm.value).subscribe({
        next: (res) => {
          alert('Purchase Successful');
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Purchase failed', err),
      });
    }
  }
  onCancel() {
    this.router.navigate(['/']);
  }
}
