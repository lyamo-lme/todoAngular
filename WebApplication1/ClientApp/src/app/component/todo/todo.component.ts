import {Component, Input} from "@angular/core";
import {ITodoItem} from "../../type/todoType";
import {TodoService} from "../../apiService/todoService";

@Component({
  selector: "todo-item",
  templateUrl: "todo.component.html",
  styleUrls: ['./todo.component.css','../../app.component.css']
})
export class TodoComponent{
  @Input() todo: ITodoItem
  constructor(private todoService:TodoService) {
  }
  changeCompletedState(newState:boolean) {
    this.todo.isCompleted = newState;
    this.todoService.updateTodo(this.todo).subscribe((data) => {
      this.todo = data;
    });
  }
  changeArchiveState(newState:boolean){
    this.todo.isArchived = newState;
    this.todoService.updateTodo(this.todo).subscribe((data) => {
      this.todo = data;
    });
  }
}
