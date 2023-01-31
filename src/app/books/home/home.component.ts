import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Books } from '../books';
import { GetBooks } from '../gql/books-query';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  
  allBooks: Observable<Books[]> = of([]);
  constructor(private apollo:Apollo){

  }


  ngOnInit(): void {

    this.allBooks = this.apollo
    .watchQuery<{books:Books[]}>({query:GetBooks}).valueChanges.pipe(
      map((result)=>result.data.books
    )
    )

    this.allBooks.forEach(book=>{
      console.log(book)
    });
  }



}
