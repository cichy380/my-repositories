import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { RepositoryService } from '../services/repository.service'
import { GithubRepositoryService } from './services/github-repository.service'


@NgModule({
  declarations: [],
  providers: [
    { provide: RepositoryService, useClass: GithubRepositoryService },
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
})
export class GithubInfrastructureModule { }
