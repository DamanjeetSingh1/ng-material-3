import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isLightMode = true;
  isM3Theme = true;

  onThemeColorsToggle() {
    this.isLightMode = !this.isLightMode;
    document.querySelector('body')?.classList.toggle('dark');
  }

  onThemeToggle() {
    this.isM3Theme = !this.isM3Theme;
    document.querySelector('body')?.classList.toggle('m3');
  }
}
