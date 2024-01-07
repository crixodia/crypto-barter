import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('About');
    this.metaService.updateTag({
      name: 'description',
      content: 'About Crypto Barter page description.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'About Crypto Barter, Bitcoin, Ethereum, Litecoin, Ripple, Bitcoin Cash, EOS, Binance Coin, Stellar, Cardano, TRON, Monero, Dash, IOTA, Cosmos, NEO, Ethereum Classic, NEM, Tezos, Zcash, VeChain, Bitcoin Gold, Dogecoin, Ontology, Qtum, OmiseGO, Decred, Bytecoin, Lisk, Bitcoin Diamond, 0x, Maker, BitShares, DigiByte, ICON, Aeternity, Steem, Siacoin, Zilliqa, Augur, Nano, Verge, Waves, Bytom, Pundi X, RChain, Stratis, Populous, Golem, Huobi Token, Basic Attention Token, Bitcoin Private, Komodo, Holo, KuCoin Shares, Aurora, Mixin, Aion, Wanchain, Ardor, Ark, MonaCoin, HyperCash, Theta, Mithril, PIVX, GXChain, Nebulas, Nexo, Cryptonex, Factom, Electroneum, QASH, MaidSafeCoin, ReddCoin, Bancor, DigixDAO, Loopring, FunFair, Status, aelf, Decentraland, KuCoin, Nuls, Gifto, aeternity, Polymath, Dentacoin, Power Ledger, Gas, Enigma, Kyber Network, Veritaseum, ChainLink, Revain, TenX, Gnosis, Waltonchain, Aion, IOStoken, Neblio, CyberMiles, Dent, Syscoin, Substratum, Ethos, Kin, DigixDAO, Ark, Nxt, Bancor, aelf, Polymath, Power Ledger, Enigma, Kyber Network, Veritaseum, ChainLink, Revain, TenX, Gnosis, Waltonchain, Aion, IOStoken, Neblio, CyberMiles, Dent, Syscoin, Substratum, Ethos, Kin, DigixDAO, Ark, Nxt, Bancor, aelf, Polymath, Power Ledger, Enigma, Kyber Network, Veritaseum, ChainLink, Revain, TenX, Gnosis, Waltonchain, Aion, IOStoken, Neblio, CyberMiles, Dent, Syscoin, Substratum, Ethos, Kin, DigixDAO, Ark, Nxt'
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'About Crypto Barter'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'About Crypto Barter page description.'
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://images.pexels.com/photos/15556066/pexels-photo-15556066/free-photo-of-two-farmers-exchanging-money.jpeg'
    });
  }
}
