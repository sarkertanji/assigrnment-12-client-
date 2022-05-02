import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../PAGES/LOGIN/Firebase/InitFirebase";
initializeFirebase();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  //
  const handleRegister = (email, password, name, navigate) => {
    setError("");
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const newUser = { email: email, displayName: name };
        setUser(newUser);
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {})
          .finally(() => {
            setIsLoading(false);
          });
        // save user to database
        saveUser(email, name);
        navigate("/");
      })

      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogin = (email, password, location, navigate) => {
    setIsLoading(true);
    setError("");
    const from = location.state?.from || "/";
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  };
  const handleLogOut = () => {
    setError("");
    setUser(null);
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    setError("");
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoading(false);
        setUser(user);
      } else {
        // User is signed out
        const errorMessage = error.message;
        setError(errorMessage);
      }
    });
    //
    return () => unSub;
  }, []);

  useEffect(() => {
    const url = `https://whispering-sands-47045.herokuapp.com/users/${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user?.email]);

  // save User function
  const saveUser = (email, name) => {
    const userDetail = { email: email, displayName: name };

    fetch("https://whispering-sands-47045.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userDetail),
    }).then();
  };
  return {
    user,
    error,
    admin,
    isLoading,
    handleRegister,
    handleLogin,
    handleLogOut,
  };
};
export default useFirebase;
