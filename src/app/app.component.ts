import { Component } from '@angular/core';
import { EntityCollectionServiceFactory } from '@ngrx/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private readonly entityCollectionServiceFactory: EntityCollectionServiceFactory
  ) {
    const todo = this.entityCollectionServiceFactory.create('Todo');
    const foobar = this.entityCollectionServiceFactory.create('Foo/Bar');
    todo.getAll();
    foobar.getAll();
  }
}
