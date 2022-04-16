import firebaseConfig from './firebase.Config';
import { initializeApp } from "firebase/app";

const initialiseFirebase=()=>{
    initializeApp(firebaseConfig);
}
export default initialiseFirebase;

/* 
steps form authentication
step:1 initial step
1.install firebase
2.create firebase project
3.create web app
4.get configeration
5.initialise firebase
6.enable auth method
-----------------------------
step:2 set up components
1.create login component
2.create register component
3.create route for login and register component
----------------------------------------------------
step:3 set auth system
1.set up sign in method
2.set sign out method
3.declare user state
4.special observer
5.return necessary method and states for firebase authentication
------------------------------------------------------------------
step: 4 create auth context hook (useAuth())
1.create a auth context
2.create context provider
3.set context provider and context value
4.use AuthProvider in the app.js
5.create useAuth hook
---------------------------------
step:5 create private route
1.create private route
2.set private route
--------------------------------
step:6 redirect after login
1. redirect user after login to their desire destination
*/