import { Component } from '@angular/core';
import { faGithub, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faGlobeEurope,faBug } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minibio';
  github = faGithub;
  twitter = faTwitter;
  web = faGlobeEurope;
  linkedin = faLinkedin;
  thm = faBug;
}
