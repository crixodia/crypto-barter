import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cookie',
  standalone: true,
  imports: [],
  templateUrl: './cookie.component.html',
  styleUrl: './cookie.component.css'
})
export class CookieComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Cookies Policy');
    this.metaService.updateTag({
      name: 'description',
      content: 'Cookie Crypto Barter page description.'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Cookie Crypto Barter'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Cookie Crypto Barter page description.'
    });
  }
}
