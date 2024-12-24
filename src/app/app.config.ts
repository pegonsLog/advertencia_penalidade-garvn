import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: "AIzaSyB6brV7k7nGFczHNi4Te54XsYiuRzP06ck",
          authDomain: "ni-garvn.firebaseapp.com",
          projectId: "ni-garvn",
          storageBucket: "ni-garvn.firebasestorage.app",
          messagingSenderId: "685474518147",
          appId: "1:685474518147:web:3fce911cf7170227a7f7b6",
          measurementId: "G-Y23E3PFPEN"


        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
