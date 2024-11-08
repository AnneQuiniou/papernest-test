import { Component } from '@angular/core';
import { MenuComponent } from "../../menu/menu/menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [MenuComponent, RouterOutlet],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {

}
