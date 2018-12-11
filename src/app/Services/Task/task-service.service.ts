import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';

import {HttpClient} from '@angular/common/http';
import { Task } from '../../models/task';
import { Project } from '../../models/project';
import { ProjectSummary } from '../../models/projectsummary';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private _http : Http) 
  {
      
  } 

  //TASKS
  GetTask(id : number) : Observable<Task>
  {
    console.log(id);
      return this._http.get("http://localhost/ProjectManagerServiceWebApi/api/GetTask" +"/"+ id)
      .map((response : Response)=><Task> response.json());
  }

  GetAllTasks() : Observable<Task[]>
  {
      return this._http.get("http://localhost/ProjectManagerServiceWebApi/api/GetAllTasks")
      .map((response : Response)=><Task[]> response.json());
  }

  InsertData(task : Task) : Observable<string>
  {
    console.log('Insertinggg...');
     return this._http.post("http://localhost/ProjectManagerServiceWebApi/api/AddTask",task)
     .map((response : Response)=><string> response.json());
  }

  UpdateData(_task : Task) : Observable<string>
  {
    return this._http.put("http://localhost/ProjectManagerServiceWebApi/api/UpdateTask" ,_task)
    .map((response : Response)=> <string> response.json());
  }

  DeleteData(_taskID : number) : Observable<string>
  {
    return this._http.delete("http://localhost/ProjectManagerServiceWebApi/api/DeleteTask" +"/" + _taskID )
    .map((response : Response)=> <string> response.json());
  }


  //PROJECTS 
  GetProject(id : number) : Observable<Project>
  {
    console.log('GETPRO'+id);
      return this._http.get("http://localhost/ProjectManagerServiceWebApi/api/GetProject" +"/"+ id)
      .map((response : Response)=><Project> response.json());
  }
  
  GetSummaryProjects() : Observable<ProjectSummary[]>
  {
      return this._http.get("http://localhost/ProjectManagerServiceWebApi/api/GetProjectSummary")
      .map((response : Response)=><ProjectSummary[]> response.json());
  }

  GetAllProjects() : Observable<Project[]>
  {
      return this._http.get("http://localhost/ProjectManagerServiceWebApi/api/GetAllProjects")
      .map((response : Response)=><Project[]> response.json());
  }

  InsertProject(task : Project) : Observable<string>
  {
    console.log('IN');
     return this._http.post("http://localhost/ProjectManagerServiceWebApi/api/AddProject",task)
     .map((response : Response)=><string> response.json());
  }

  UpdateProject(_task : Project) : Observable<string>
  {
    return this._http.put("http://localhost/ProjectManagerServiceWebApi/api/UpdateProject" ,_task)
    .map((response : Response)=> <string> response.json());
  }

  DeleteProject(_taskID : number) : Observable<string>
  {
    return this._http.delete("http://localhost/ProjectManagerServiceWebApi/api/DeleteProject" +"/" + _taskID )
    .map((response : Response)=> <string> response.json());
  }

//USERS 
GetUser(id : number) : Observable<User>
{
  console.log(id);
    return this._http.get("http://localhost/ProjectManagerServiceWebApi/api/GetUser" +"/"+ id)
    .map((response : Response)=><User> response.json());
}

GetSummaryUsers() : Observable<User[]>
  {
      return this._http.get("http://localhost/ProjectManagerServiceWebApi/api/GetUserSummary")
      .map((response : Response)=><User[]> response.json());
  }

GetAllUsers() : Observable<User[]>
{
  console.log('User list');
    return this._http.get("http://localhost/ProjectManagerServiceWebApi/api/GetAllUsers")
    .map((response : Response)=><User[]> response.json());
}

InsertUser(task : User) : Observable<string>
{
   return this._http.post("http://localhost/ProjectManagerServiceWebApi/api/AddUser",task)
   .map((response : Response)=><string> response.json());
}

UpdateUser(_task : User) : Observable<string>
{
  return this._http.put("http://localhost/ProjectManagerServiceWebApi/api/UpdateUser" ,_task)
  .map((response : Response)=> <string> response.json());
}

DeleteUser(_taskID : number) : Observable<string>
{
  return this._http.delete("http://localhost/ProjectManagerServiceWebApi/api/DeleteUser" +"/" + _taskID )
  .map((response : Response)=> <string> response.json());
}


}
