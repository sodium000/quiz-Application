import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";


export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Quiz Application" />
            <h3>Quiz Application</h3>
          </Link>
        </li>
      </ul>  
      <Account />
    </nav>
  );
}

// import logo from "../assets/images/logo-bg.png";
// import classes from "../styles/Nav.module.css";
// import Account from "./Account";

// export default function Nav() {
//   return (
//     <nav className={classes.nav}>
//       <ul>
//         <li>
//           <a href="index.html" className={classes.brand}>
//             <img src={logo} alt="Learn with Sumit Logo" />
//             <h3>Learn with Sumit</h3>
//           </a>
//         </li>
//       </ul>
//       <Account />
//     </nav>
//   );
// }