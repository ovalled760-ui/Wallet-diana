import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Wallet-diana';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Verifica inactividad cada 5 segundos
    setInterval(() => {
      this.authService.checkInactivityLimit();
    }, 5000);
  }

  // Escucha actividad del usuario (teclado o ratón)
  @HostListener('document:mousemove')
  @HostListener('document:keydown')
  onUserActivity(): void {
    this.authService.updateActivityTime();
  }
}
