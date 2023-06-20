import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faGooglePlusG, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  icons = [
    { class: 'fa-facebook', isHovered: false },
    { class: 'fa-twitter', isHovered: false },
    { class: 'fa-google-plus-g', isHovered: false },
    { class: 'fa-instagram', isHovered: false },
    { class: 'fa-youtube', isHovered: false }
  ];

  constructor() {
    library.add(faFacebook, faTwitter, faGooglePlusG, faInstagram, faYoutube);
  }

  ngOnInit(): void {
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  facebookIcon = faFacebook;
  twitterIcon = faTwitter;
  googlePlusIcon = faGooglePlusG;
  instagramIcon = faInstagram;
  youtubeIcon = faYoutube;
}
