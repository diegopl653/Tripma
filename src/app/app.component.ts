import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tripma';
  readonly count = signal(0);

  constructor() {
    console.log('AppComponent created');
  }

  incrementar = () => {
    this.count.set(this.count() + 1);
  };

  decrementar = () => {
    if (this.count() === 0) {
      return;
    }
    this.count.set(this.count() - 1);
  };

  reset = () => {
    this.count.set(0);
  };
}
