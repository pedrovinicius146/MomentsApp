import { Component } from '@angular/core';
import { AboutComponent } from '../../pages/about/about.component';
import { HomeComponent } from '../../pages/home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
