import  app from 'firebase/app';


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
    }
  }
  
  //firebase.initializeApp(firebaseConfig);

  export default Firebase;

  