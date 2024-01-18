import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  standalone: true,
  providers: [ProductsService],
  imports: [HttpClientModule, RouterModule, CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  baseUrl: string = this.productService.baseUrl;

  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
  };

  tradeProduct: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
  };

  products: Product[] = [];
  selectedProductId: string = '';

  constructor(@Inject(PLATFORM_ID) private platformid: Object, private route: ActivatedRoute, private router: Router, private productService: ProductsService, private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Product Detail');
    this.metaService.updateTag({
      name: 'description',
      content: 'Product Crypto Barter page description.'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Product Crypto Barter'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Product Crypto Barter page description.'
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformid)) {
      const productId = this.route.snapshot.paramMap.get('id') || '';
      this.getProducts();
      this.productService.getProduct(productId).subscribe({
        next: (data: any) => {
          this.product = data;
        },
        error: (error: any) => {
          this.router.navigate(['/products']);
        }
      });
    }
  }

  getProducts(): void {
    if (isPlatformBrowser(this.platformid)) {
      this.productService.getProducts().subscribe({
        next: (data: any) => {
          this.products = data;
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    }
  }

  updateTrade(): void {
    if (isPlatformBrowser(this.platformid)) {
      this.productService.getProduct(this.selectedProductId).subscribe({
        next: (data: any) => {
          this.tradeProduct = data;
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    }
  }

  getDifference(): number {
    //    return Math.round(Math.abs(this.product.price - this.tradeProduct.price) * 100) / 100;
    if (isPlatformBrowser(this.platformid)) {
      return Math.round(this.tradeProduct.price - this.product.price) * 100 / 100;
    }
    return 0;
  }

  done(): void {
    this.router.navigate(['/done']);
  }
}