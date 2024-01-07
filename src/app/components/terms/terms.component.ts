import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Terms of Service');
    this.metaService.updateTag({
      name: 'description',
      content: 'Terms Crypto Barter page description.'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Terms Crypto Barter'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Terms Crypto Barter page description.'
    });
  }
}
