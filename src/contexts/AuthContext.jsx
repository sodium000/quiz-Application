// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import React, { useContext, useEffect, useState } from "react";
// import "../firebase.js";

// const AuthProvider = React.createContext();

// export function useAuth() {
//   return useContext(AuthProvider);
// }

// export function AuthProvider ({ children })  {
//   const [loading, setLoading] = useState(true);
//   const [currentUser, setCurrentUser] = useState();

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   // signup function
//   async function signup(email, password, username) {
//     const auth = getAuth();
//     await createUserWithEmailAndPassword(auth, email, password);

//     // update profile
// await updateProfile(auth.currentUser, {
//   displayName: username,
// });

// const updatedUser = { ...auth.currentUser }; // clone it
// setCurrentUser(updatedUser);
//   }

//   // login function
//   function login(email, password) {
//     const auth = getAuth();
//     return signInWithEmailAndPassword(auth, email, password);
//   }

//   // logout function
//   function logout() {
//     const auth = getAuth();
//     return signOut(auth);
//   }

//   const value = {
//     signup,
//     login,
//     logout,
//   };

//   return (
//     <AuthProvider value={value}>
         
//     </AuthProvider>
//   );
// }