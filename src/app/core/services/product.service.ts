import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly apiUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  // Corresponds to User Story 2: Read/View Products
  getProducts(searchTerm?: string, sortBy?: string): Observable<Product[]> {
    let params = new HttpParams();
    if (searchTerm) {
      params = params.set('search', searchTerm);
    }
    if (sortBy) {
      params = params.set('sort', sortBy);
    }

    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  // Corresponds to User Story 1 & 3: Create/Update Product
  saveProduct(product: Product): Observable<Product> {
    if (product.id) {
      // Update existing product via backend
      return this.http.put<Product>(`${this.apiUrl}/admin/${product.id}`, product);
    } else {
      // Create new product via backend
      return this.http.post<Product>(`${this.apiUrl}/admin`, product);
    }
  }

  // Corresponds to User Story 4: Delete Product
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/admin/${id}`);
  }
}
