import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-transparency',
  standalone: true,
  imports: [],
  templateUrl: './transparency.component.html',
  styleUrl: './transparency.component.css'
})
export class TransparencyComponent {

  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Transparency');
    this.metaService.updateTag({
      name: 'description',
      content: 'Transparency Crypto Barter page description.'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Transparency Crypto Barter'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Transparency Crypto Barter page description.'
    });
  }

}
