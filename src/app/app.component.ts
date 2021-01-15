import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-angular-lemoncode';

  constructor(private service: AuthService){
  }
  isLogged(): boolean {
    return this.service.isLogged()
  }
}
