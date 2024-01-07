import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  mapPath: string = 'src/assets/map.jpg';

  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Contact');
    this.metaService.updateTag({
      name: 'description',
      content: 'Contact Crypto Barter page description.'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Contact Crypto Barter'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Contact Crypto Barter page description.'
    });
  }
}