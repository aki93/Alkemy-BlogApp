import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit {

  todos:any[] = []
  completedTodos:any[] = []
  state:boolean = true;
  filterTodo = ""
  

  constructor(
    
    private blogService : BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.blogService.getAllTodos().subscribe(res =>
      {this.todos = res,console.log(this.todos)}) 

  }

  getAllTodos(){
    this.blogService.getAllTodos().subscribe(res =>
      {this.todos = res,console.log(this.todos)})
  }

   searchByUserId(userId:any){

    this.blogService.getAllTodos().subscribe(res =>
      {this.todos = res})
    setTimeout(()=>{   
      this.todos = this.todos.filter(todo =>
        todo.userId == userId)                      
  }, 1000);

    
    
  }

  updateTodo(index:any){
    if(this.todos[index].completed == false){
      this.todos[index].completed = true
    }else{
      this.todos[index].completed = false 
    }
  }
  

  filterTodosCompleted(completed:any){
    this.blogService.getAllTodos().subscribe(res =>
      {this.todos = res})
    setTimeout(() =>{
    this.completedTodos = this.todos.filter(comp => 
    completed == comp.completed)
    this.todos = this.completedTodos
    },500)

  }

  filterTodosUnCompleted(completed:any){
    this.blogService.getAllTodos().subscribe(res =>
      {this.todos = res})
    setTimeout(() =>{  
    this.completedTodos = this.todos.filter(comp => 
       completed !== comp.completed)
    this.todos = this.completedTodos
    },500)
  }

}
