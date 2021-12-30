import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { IRepository } from './repository.model'


@Injectable({
  providedIn: 'root',
})
export abstract class RepositoryService {

  abstract getRepositories(ownerLogin: string): Observable<IRepository[]>
}
