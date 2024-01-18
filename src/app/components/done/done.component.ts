import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-done',
  standalone: true,
  imports: [],
  templateUrl: './done.component.html',
  styleUrl: './done.component.css'
})
export class DoneComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Done');
    this.metaService.updateTag({
      name: 'description',
      content: 'Done Crypto Barter page description.'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Done Crypto Barter'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Done Crypto Barter page description.'
    });
  }

  goToProducts(): void {
    window.location.href = '/products';
  }
}
