import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Privacy Policy');
    this.metaService.updateTag({
      name: 'description',
      content: 'Privacy Crypto Barter page description.'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Privacy Crypto Barter'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Privacy Crypto Barter page description.'
    });
  }
}
