import {type Users } from './user.model';
import { Component, Input, computed, input, Output,EventEmitter, output } from '@angular/core';

type User = {
     id:string,
    avatar:string,
    name:string
}



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectUser = signal(DUMMY_USERS[randomIndex])
  // imagePath = computed(()=>{
  //   return '/assets/users/'+this.selectUser().avatar
  // })

  // @Input({required: true}) id!:string
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  @Input({required:true}) user!:Users
  @Input({required:true}) selected!: boolean
  @Output() select = new EventEmitter<string>();

  //select = output<string>();

  get imagePath(){
    return './assets/users/'+this.user.avatar
  }

  //signals approach
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(()=>{
  //   return './assets/users/'+this.avatar()
  // })

  onSelectUser(){
    this.select.emit(this.user.id);
    // let randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectUser.set(DUMMY_USERS[randomIndex])

  }
}


