import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IGithubRepository } from './github-repository.model'
import { RepositoryService } from '../../services/repository.service'

@Injectable({
  providedIn: 'root',
})
export class GithubRepositoryService implements RepositoryService {

  constructor(private http: HttpClient) { }

  getRepositories(ownerLogin: string): Observable<IGithubRepository[]> {
    return this.http.get<IGithubRepository[]>(`https://api.github.com/users/${ownerLogin}/repos`)
  }
}
