# Dependency Inversion Principle (DIP)

> _Depend upon Abstractions. Do not depend upon concretions._

## Example in Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

### Abstraction

The [`RepositoryService`](src/app/services/repository.service.ts) is abstraction layer for getting the collection of repositories.

```typescript
@Injectable()
abstract class RepositoryService {
  abstract getRepositories(ownerLogin: string): Observable<IRepository[]>
}
```

### Injection

In the [`AppController`](src/app/app.component.ts) we inject service that is hidden by the `RepositoryService` injection token.

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private repositoryService: RepositoryService) {
  }
}
```

### Provider
The [`GithubInfrastructureModule`](src/app/github-infrastructure/github-infrastructure.module.ts) says that in that place, it should be provided a `GithubRepositoryService` class.

```typescript
@NgModule({
  providers: [
    { provide: RepositoryService, useClass: GithubRepositoryService },
  ],
  imports: [
    CommonModule,
  ],
})
export class GithubInfrastructureModule { }
```

## Inspiration and source
Article by Maciej Sikorski

https://betterprogramming.pub/how-to-follow-the-dependency-inversion-principle-in-nestjs-and-angular-8d344303dc3b

Polish version: https://www.angular.love/2020/12/02/jak-postepowac-zgodnie-z-zasada-odwrocenia-zaleznosci-dip-w-nestjs-i-angular/

## Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
