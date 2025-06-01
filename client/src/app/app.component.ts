import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  http = inject(HttpClient); 
  title = 'Dating App';
  users: any;
  
  // This is the main component of the application.
  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/users/').subscribe({
      next:response => this.users = response,
      error:erorr =>console.log(erorr),
      complete:() => console.log('Request completed')
    })
  }

  
}
