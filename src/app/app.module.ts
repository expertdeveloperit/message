import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TermsNPrivacyComponent } from './terms-n-privacy/terms-n-privacy.component';
import { FeedComponent } from './feed/feed.component';
import { SearchComponent } from './search/search.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { ActivationCodeComponent } from './activation-code/activation-code.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TermsNPrivacyComponent,
    FeedComponent,
    SearchComponent,
    TextEditorComponent,
    PhoneNumberComponent,
    ActivationCodeComponent,
    ImageViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
