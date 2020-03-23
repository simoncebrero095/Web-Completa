import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas 
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductosListComponent } from './components/productos-list/productos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services/services.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
