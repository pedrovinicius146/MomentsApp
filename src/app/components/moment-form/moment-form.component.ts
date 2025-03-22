import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-moment-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent implements OnInit{
@Input() btnText!: string
momentForm !: FormGroup








constructor(){}
ngOnInit():void{
  this.momentForm = new FormGroup({
    id:new FormControl (''),
    title:new FormControl ('',[Validators.required]),
    description:new FormControl ('',[Validators.required]),
    image:new FormControl (''),
    
  }) }
submit(){
  console.log('Enviou um Formulario')
}
get title(){
return this.momentForm.get('title')!

}
get description(){
  return this.momentForm.get('description')!
  
  }


}
