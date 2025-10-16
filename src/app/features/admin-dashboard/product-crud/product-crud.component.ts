import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { ProductApiService } from '../../../core/services/product-api.service';
import { Product, ProductResponseDTO } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ProductCrudComponent implements OnInit, OnDestroy {
  private productService = inject(ProductApiService);
  private snackBar = inject(MatSnackBar);
  private destroy$ = new Subject<void>();
  private searchSubject = new Subject<string>();
  products: ProductResponseDTO[] = [];
  activeTab: string = 'products';
  selectedProduct: ProductResponseDTO | null = null;
  searchTerm: string = '';
  sortBy: string = '';
  sortDir: string = '';
  selectedSort: string = '';

  ngOnInit(): void {
    this.loadProducts();
    this.setupSearchDebounce();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    if (tab !== 'update') {
      this.selectedProduct = null;
    }
  }

  loadProducts(): void {
    this.productService.getProducts(this.searchTerm, this.sortBy, this.sortDir).subscribe({
      next: (products: ProductResponseDTO[]) => {
        console.log('Loaded products:', products);
        this.products = products;
        console.log('Products array length:', this.products.length);
      },
      error: (error: any) => {
        console.error('Error loading products:', error);
      }
    });
  }

  onSearch(): void {
    this.loadProducts();
  }

  onSort(): void {
    this.loadProducts();
  }

  setupSearchDebounce(): void {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe((searchTerm: string) => {
      this.searchTerm = searchTerm;
      this.loadProducts();
    });
  }

  onSearchInput(): void {
    this.searchSubject.next(this.searchTerm);
  }

  onSortChange(): void {
    // Parse selectedSort to set sortBy and sortDir
    if (this.selectedSort) {
      const parts = this.selectedSort.split('_');
      if (parts.length === 2) {
        this.sortBy = parts[0];
        this.sortDir = parts[1];
      } else {
        this.sortBy = this.selectedSort;
        this.sortDir = '';
      }
    } else {
      this.sortBy = '';
      this.sortDir = '';
    }
    this.loadProducts();
  }

  onAddProduct(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const product: Product = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      price: parseFloat(formData.get('price') as string),
      quantity: parseInt(formData.get('quantity') as string),
      image_url: formData.get('image_url') as string,
      is_active: true,
      category_id: parseInt(formData.get('category_id') as string)
    };

    this.productService.createProduct(product).subscribe({
      next: (savedProduct: ProductResponseDTO) => {
        console.log('Product saved:', savedProduct);
        this.snackBar.open('Product added successfully!', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
        this.loadProducts();
        form.reset();
        this.setActiveTab('products'); // Switch to products tab to show the added product
      },
      error: (error: any) => {
        console.error('Error adding product:', error);
        this.snackBar.open('Error adding product. Please try again.', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }

  onEditProduct(product: ProductResponseDTO): void {
    this.selectedProduct = product;
    this.setActiveTab('update');
  }

  onUpdateProduct(event: Event): void {
    event.preventDefault();
    if (!this.selectedProduct) return;

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const updatedProduct: Product = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      price: parseFloat(formData.get('price') as string),
      quantity: parseInt(formData.get('quantity') as string),
      image_url: formData.get('image_url') as string,
      is_active: this.selectedProduct.is_active,
      category_id: parseInt(formData.get('category_id') as string)
    };

    this.productService.updateProduct(this.selectedProduct.id, updatedProduct).subscribe({
      next: () => {
        this.loadProducts();
        this.selectedProduct = null;
        this.setActiveTab('products');
      },
      error: (error: any) => {
        console.error('Error updating product:', error);
      }
    });
  }

  cancelUpdate(): void {
    this.selectedProduct = null;
    this.setActiveTab('products');
  }

  onDeleteProduct(productId?: number): void {
    if (productId && confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(productId).subscribe({
        next: () => {
          this.loadProducts();
        },
        error: (error: any) => {
          console.error('Error deleting product:', error);
        }
      });
    }
  }
}


