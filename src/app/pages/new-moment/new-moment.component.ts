import { Component, OnInit } from '@angular/core';
import { MomentFormComponent } from "../../components/moment-form/moment-form.component";

@Component({
  selector: 'app-new-moment',
  imports: [MomentFormComponent],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent implements OnInit {
btnText='Compartilhar!';
constructor(){}
ngOnInit(): void {
    
}

}
