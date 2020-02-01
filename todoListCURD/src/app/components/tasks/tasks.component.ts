import { Component, OnInit } from '@angular/core';

import { Task } from "../Interface/tasks";
import { TaskService } from "../../services/Tasks/tasks.service"; 

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasks: Task[];
  public editTask: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  add(title: string): void {
    this.editTask = undefined;
    title = title.trim();
    if( !title ) {
      return;
    }
 
    const newTask: Task = {title} as Task;
    this.taskService.addTask(newTask).subscribe((task) => this.tasks.push(task));
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter((currTask) => currTask !== task);
    this.taskService.deleteTask(task._id).subscribe();
  }

  edit(task) {
    this.editTask = task;
  }

  update() {
    if(this.editTask) {
      this.taskService.updateTask(this.editTask).subscribe((task) => {
        const index = task ? this.tasks.findIndex(idx => idx._id === task._id) : -1; 
        if(index > -1) {
          this.tasks[index] = task;
        }
      });
      this.editTask = undefined;
    }
  }

}
