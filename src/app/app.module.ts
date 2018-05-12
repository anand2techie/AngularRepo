import { NgModule } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import { ServerComponent } from './server/server.component';
import { FooterComponent } from './footer/footer.component';
import { EvenoroddComponent } from './evenorodd/evenorodd.component';
import { BasicHighlightDirective } from './basic-highlight.directive';


@NgModule({
    declarations:[AppComponent, ServerComponent, FooterComponent, EvenoroddComponent, BasicHighlightDirective],
    imports:[BrowserModule],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule{

}