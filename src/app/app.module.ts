import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageToPdfConverterComponent } from './app.component'; // Import your component

@NgModule({
  declarations: [
    ImageToPdfConverterComponent, // Include your component here
  ],
  imports: [
    BrowserModule, // Include any other required modules here
  ],
  providers: [],
  bootstrap: [ImageToPdfConverterComponent] // Set your component as the root component
})
export class AppModule { }
