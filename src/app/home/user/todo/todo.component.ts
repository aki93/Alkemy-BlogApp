import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BlogService } from '../../../service/blog.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:any[] = []

  completedTodos:any[] = []
  state:boolean = true;

  constructor(
    private blogService : BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getAllUserTodos()

  }

  getAllUserTodos(){
    this.activatedRoute.params.subscribe(params =>{
      let userId = params['userId']
      this.blogService.getUserTodos(userId).subscribe((res) => {this.todos = res,console.log(res)})
      
    })
    }

    updateTodo(index:any){
      if(this.todos[index].completed == false){
        this.todos[index].completed = true
      }else{
        this.todos[index].completed = false 
      }
    }
    

    filterTodosCompleted(completed:any){
      this.completedTodos = this.todos.filter(comp => 
      completed == comp.completed)
      this.todos = this.completedTodos

    }

    filterTodosUnCompleted(completed:any){
      this.completedTodos = this.todos.filter(comp => 
         completed !== comp.completed)
      this.todos = this.completedTodos
    }

}
