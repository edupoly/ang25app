import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CropService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:4600/api/farmer';

  addCrop(cropData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crops`, cropData);
  }

  getFarmerCrops(): Observable<any> {
    return this.http.get(`${this.apiUrl}/farmerCrops`);
  }

  getAllCrops(): Observable<any> {
    return this.http.get(`${this.apiUrl}/allcrops`);
  }

  getCropById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/crop/${id}`);
  }

  getFarmerOrders(): Observable<any> {
    return this.http.get(`${this.apiUrl}/orders`);
  }
}
