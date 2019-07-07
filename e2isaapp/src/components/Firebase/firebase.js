import  app from 'firebase/app';
import 'firebase/auth';

import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyBFUTrGj8TtqqAjOsQlPcl82R7m1DEezEs",
    authDomain: "myfiree2isa.firebaseapp.com",
    databaseURL: "https://myfiree2isa.firebaseio.com",
    projectId: "myfiree2isa",
    storageBucket: "myfiree2isa.appspot.com",
    messagingSenderId: "724251458480",
    appId: "1:724251458480:web:109a977cbd59fe1b"
  };

  class Firebase{
      constructor(){
      app.initializeApp(firebaseConfig);
      this.auth = app.auth();
      this.googleProvider = new app.auth.GoogleAuthProvider();
      this.db = app.database();
    }

    //Authentication API to firebase using the following three SignUp Mechanism Email/Password / Google OAuth / Phone based pin Auth
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
    doSignInWithGoogle = () =>  this.auth.signInWithPopup(this.googleProvider);
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

    //User API to assign user ID GUid to vars and add this user to firebase realtime database after sign up
    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');
  }
  
  //firebase.initializeApp(firebaseConfig);
  export default Firebase;
  
  
  