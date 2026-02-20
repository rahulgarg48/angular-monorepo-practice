import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from '../../../shared/ui/button/button';
import { inject } from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service'
import {User} from '../../../shared/models/user.model'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Button],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('customer-app');
  private authService = inject(AuthService);
  user : User = this.authService.getUser();
  // role = this.authService.getRole();


}
