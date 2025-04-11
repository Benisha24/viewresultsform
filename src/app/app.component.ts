import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResulttableComponent } from './resulttable/resulttable.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ResulttableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'viewresultsform';
}
