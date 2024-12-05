import { Component } from '@angular/core';
import { ClientListComponent } from "./client-list/client-list.component";
import { NewClientFormComponent } from "./new-client-form/new-client-form.component";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [ClientListComponent, NewClientFormComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

}
