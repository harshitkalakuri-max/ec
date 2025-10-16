import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductResponseDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private readonly apiUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  // Corresponds to GET /api/products - getAllProducts()
  getProducts(searchTerm?: string, sortBy?: string, sortDir?: string): Observable<ProductResponseDTO[]> {
    let params = new HttpParams();
    if (searchTerm) {
      params = params.set('search', searchTerm);
    }
    if (sortBy) {
      params = params.set('sortBy', sortBy);
    }
    if (sortDir) {
      params = params.set('sortDir', sortDir);
    }

    return this.http.get<ProductResponseDTO[]>(this.apiUrl, { params });
  }

  // Corresponds to GET /api/products/{id} - getProductById(id)
  getProductById(id: number): Observable<ProductResponseDTO> {
    return this.http.get<ProductResponseDTO>(`${this.apiUrl}/${id}`);
  }

  // Corresponds to GET /api/products/category/{categoryId} - getProductsByCategory(categoryId)
  getProductsByCategory(categoryId: number): Observable<ProductResponseDTO[]> {
    return this.http.get<ProductResponseDTO[]>(`${this.apiUrl}/category/${categoryId}`);
  }

  // Corresponds to POST /api/products/admin - createProduct() [Admin only]
  createProduct(product: Product): Observable<ProductResponseDTO> {
    return this.http.post<ProductResponseDTO>(`${this.apiUrl}/admin`, product);
  }

  // Corresponds to PUT /api/products/admin/{id} - updateProduct() [Admin only]
  updateProduct(id: number, product: Product): Observable<ProductResponseDTO> {
    return this.http.put<ProductResponseDTO>(`${this.apiUrl}/admin/${id}`, product);
  }

  // Corresponds to DELETE /api/products/admin/{id} - deleteProduct() [Admin only]
  deleteProduct(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/admin/${id}`, { responseType: 'text' });
  }
}
