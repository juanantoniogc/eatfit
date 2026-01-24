import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({ projectId: "eatfit-2b408", 
      appId: "1:206983613035:web:82db04cd17ec69209fff2e", 
      databaseURL: "https://eatfit-2b408-default-rtdb.europe-west1.firebasedatabase.app", 
      storageBucket: "eatfit-2b408.firebasestorage.app", 
      apiKey: "AIzaSyCPo7EWncuKJBepOlv38DWnbWk2WaQ7YqA", 
      authDomain: "eatfit-2b408.firebaseapp.com", 
      messagingSenderId: "206983613035"})), 
      provideAuth(() => getAuth()), 
      provideDatabase(() => getDatabase())]
};
