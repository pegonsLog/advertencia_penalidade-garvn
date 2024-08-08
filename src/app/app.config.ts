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
    provideAnimationsAsync(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'notificacao-advertencia',
          appId: '1:362166436954:web:00f60fdacdbb71cab84463',
          storageBucket: 'notificacao-advertencia.appspot.com',
          apiKey: 'AIzaSyB_AWeLprx4rAcGjfcALNyedvo1GhQEJ7w',
          authDomain: 'notificacao-advertencia.firebaseapp.com',
          messagingSenderId: '362166436954',
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
