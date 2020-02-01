import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http"
import { HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import { Task } from "../../components/Interface/tasks";
import { HttpErrorHandlerService, HandleError } from "../httpErrorHandler/http-error-handler.service"

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandlerService) { 
    this.handleError = httpErrorHandler.createHandleError("TaskService");
  }

  getTasks(): Observable<Task[]> {
    return this.http
      .get<Task[]>("api/tasks")
      .pipe(catchError(this.handleError("getTasks", [])));
  }

  addTask(task: Task): Observable<Task> {
    return this.http
      .post<Task>("api/tasks", task)
      .pipe(catchError(this.handleError("addTask", task)));
  }

  deleteTask(id: number): Observable<{}> {
    const url =  `api/tasks/${id}`;
    return  this.http 
      .delete(url)
      .pipe(catchError(this.handleError("deleteTask")));
  }

  updateTask(task: Task): Observable<Task> {
    return this.http
      .put<Task>(`api/tasks/${task._id}`, task)
      .pipe(catchError(this.handleError("updateTask", task))); 
  }

}
