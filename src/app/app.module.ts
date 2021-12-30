import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { GithubInfrastructureModule } from './github-infrastructure/github-infrastructure.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GithubInfrastructureModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
