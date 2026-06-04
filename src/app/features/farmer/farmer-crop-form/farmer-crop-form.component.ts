import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormArray,
} from '@angular/forms';
import { CropService } from '../../../core/crop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer-crop-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './farmer-crop-form.component.html',
  styleUrl: './farmer-crop-form.component.css',
})
export class FarmerCropFormComponent {
  cropForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cropService: CropService,
    private router: Router,
  ) {
    this.cropForm = this.fb.group({
      type: ['Grain', Validators.required],
      subType: ['Rice', Validators.required],
      totalQuantity: [100, [Validators.required, Validators.min(0)]],
      remainingQuantity: [100, [Validators.required, Validators.min(0)]],
      pincode: [
        '533216',
        [Validators.required, Validators.pattern('^[0-9]{6}$')],
      ],
      address: this.fb.group({
        district: ['Konaseema', Validators.required],
        state: ['Andhra Pradesh', Validators.required],
        area: ['Pedapatnam', Validators.required],
      }),
      startDate: ['2024-01-01', Validators.required],
      endDate: ['2024-06-01', Validators.required],
      currentPrice: ['2500', Validators.required],
    });
  }

  onSubmit() {
    console.log('Form Data:', this.cropForm);

    if (this.cropForm.valid) {
      console.log('Form Data:', this.cropForm.value);
      this.cropService.addCrop(this.cropForm.value).subscribe({
        next: (res) => {
          alert('Crop added successfully');
          this.router.navigate(['/farmer/allcrops']);
        },
        error: (err) => {
          console.error('Error adding crop', err);
        },
      });
    }
  }
}
