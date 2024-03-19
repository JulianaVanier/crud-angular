//app.component.ts is the source file that describes the app-root component.
//This is the top-level Angular component in the app. A component is the basic building block of an Angular application.
//The component description includes the component's code, HTML template, and styles, which can be described in this file, or in separate files.
//In this app, the styles are in a separate file while the component's code and HTML template are in this file.

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crud-angular';
}
