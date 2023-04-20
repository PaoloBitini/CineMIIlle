import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cinemille';

  routeList: RouteItem[] = [
    {name: "Films", route:"/films"},
    {name: "Sale", route: "/sale"},
    {name: "Programmazioni", route: "/programmazioni"},
    {name: "Storico", route: "/storico"}
  ]


}

interface RouteItem{
  name: string;
  route: string;
}
