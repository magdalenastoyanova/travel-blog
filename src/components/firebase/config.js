import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgcpBP9IW6V8Mj2VHUnKDMkQnAtrd7w3w",
  authDomain: "travel-blog-84940.firebaseapp.com",
  databaseURL:
    "https://travel-blog-84940-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "travel-blog-84940",
  storageBucket: "travel-blog-84940.appspot.com",
  messagingSenderId: "845324917638",
  appId: "1:845324917638:web:d98377d1640f3d4d1e2a07",
  measurementId: "G-ZPM9K9HPK8",
};

class Firebase {
  constructor() {
      firebase.initializeApp(firebaseConfig);
      this.auth = firebase.auth();
      this.db = firebase.firestore();
  }

  login(email, password) {
      return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
      return this.auth.signOut()
  }

  async register(name, email, password, photoUrl) {
      await this.auth.createUserWithEmailAndPassword(email, password).then(registeredUser => {
          this.db.collection("usersCollection").add({
              uid: registeredUser.user.uid,
              bio: 'Empty Bio'
          })
      });
      return this.auth.currentUser.updateProfile({
          displayName: name,
          photoURL: photoUrl
      })
  }

  async editUser(name, email, photoUrl) {
      await this.auth.currentUser.updateProfile({
          displayName: name,
          photoURL: photoUrl,
          email: email
      })
  }

  async createPlace(place, imageUrl, description) {
      await this.db.collection("place").add({
        place: place,
        imageUrl: imageUrl,
        description: description,
         
      })
  }
}

export default new Firebase();