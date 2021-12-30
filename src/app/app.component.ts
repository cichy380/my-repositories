import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { IRepository } from './services/repository.model'
import { RepositoryService } from './services/repository.service'

const MY_LOGIN = 'cichy380'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public repositories$: Observable<IRepository[]> | undefined

  constructor(private repositoryService: RepositoryService) {
  }

  ngOnInit() {
    this.repositories$ = this.repositoryService.getRepositories(MY_LOGIN)
  }
}
