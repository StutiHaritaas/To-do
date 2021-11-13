import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent implements OnInit {
  details: any = [];
  constructor(private det: TodoService) {}

  ngOnInit(): void {
    this.details = this.det.getDetails();
  }
}
