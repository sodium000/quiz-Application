// import { Route, Routes } from "react-router-dom";
// import { AuthProvider } from "../contexts/AuthContext";
// import "../styles/App.css";
// import Layout from "./Layout";
// import HomePage from "./pages/homePage";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import SignupFrom from "./SignupForm";

// function App() {
//   return (
   

//   );
// }

// export default App;




import { Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import HomePage from "./pages/homePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  return (
<Routes>
<Route path="/" element={<Layout />}>
  <Route index element={<HomePage />} />
  <Route path="signup/*" element={<Signup />} />
  <Route path="login" element={<Login />} />
</Route>;
</Routes>

  );
}

export default App;
