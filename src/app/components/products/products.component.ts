import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../../interfaces/product';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  standalone: true,
  providers: [ProductsService],
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] // Fix the typo here, change 'styleUrl' to 'styleUrls'
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  loadingImages: boolean[] = []; // Track loading state for each image
  baseUrl = this.productsService.baseUrl;

  constructor(@Inject(PLATFORM_ID) private platformid: Object, private router: Router, private productsService: ProductsService, private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Products');
    this.metaService.updateTag({
      name: 'description',
      content: 'Products Crypto Barter page description.'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Products Crypto Barter'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Products Crypto Barter page description.'
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformid)) {
      this.productsService.getProducts().subscribe({
        next: (data: any) => {
          this.products = data;
          // Initialize loading state for each product
          this.loadingImages = new Array(this.products.length).fill(true);
        },
        error: (error: any) => {
          this.router.navigate(['/']);
        }
      });
    }
  }

  productDetail(product: Product): void {
    if (isPlatformBrowser(this.platformid)) {
      localStorage.setItem('currentProduct', JSON.stringify(product));
      this.router.navigate(['/product', product.id]);
    }
  }

  // Function to handle image load
  imageLoaded(index: number): void {
    this.loadingImages[index] = false;
  }
}
