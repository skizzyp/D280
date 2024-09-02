import { Component, AfterViewInit } from '@angular/core';
import { ApiService} from "../app/api.service";


@Component({
  selector: 'app-world',
  standalone: true,
  imports: [],
  templateUrl: './world.component.html',
  styleUrl: './world.component.css'
})
export class WorldComponent {
//injects api service
  constructor(private apiService:ApiService) {}

  onclick(event: MouseEvent): void {
    const target = event.target as SVGPathElement
    const id = target.id;
    console.log(id)

//sets variable in apiservice to be retrieved by app component
    this.apiService.setVariable(id);
  }
}









