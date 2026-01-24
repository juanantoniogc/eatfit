import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, authState, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth)
  constructor() { }

  register(email:string,password:string){
  
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  login(email:string,password:string){
  
    return signInWithEmailAndPassword(this.auth, email, password)
  }
  logout(){
    signOut(this.auth)
  }

  getUserAuthenticated():Observable<User|null>{
    
    return authState(this.auth)
  }

  loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider)
  }
}
