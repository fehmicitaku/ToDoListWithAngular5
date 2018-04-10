import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoItemsCount: number = 0;
  addButton: string = "Add next item";
  todoText: string = "";
  plans = ['Go to work', 'Take a coffee', 'Meet my friend'];



  constructor() { }

  ngOnInit() {
    this.todoItemsCount = this.plans.length;
  }

  addTodoPlan() {
    this.plans.push(this.todoText);
    this.todoText = '';
    this.todoItemsCount = this.plans.length;
}

  deleteTodoPlan(i) {
    this.plans.splice(i ,1);
    this.todoItemsCount = this.plans.length;
  }
}
