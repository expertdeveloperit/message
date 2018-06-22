import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TermsNPrivacyComponent } from './terms-n-privacy/terms-n-privacy.component';
import { FeedComponent } from './feed/feed.component';
import { SearchComponent } from './search/search.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { ActivationCodeComponent } from './activation-code/activation-code.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

const routes: Routes = [
  { 
    path: '',
    component: FeedComponent
  },

  { path: 'search',
    component: SearchComponent 
  },

  { path: 'text-editor',
    component: TextEditorComponent 
  },

  { path: 'terms-n-policy',
    component: TermsNPrivacyComponent 
  },

  { path: 'phone-number',
    component: PhoneNumberComponent 
  },

  { path: 'activation-code',
    component: ActivationCodeComponent 
  },

  { path: 'image-viewer',
    component: ImageViewerComponent 
  }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
