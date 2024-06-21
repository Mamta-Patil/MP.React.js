import { FaBeer } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h3> <a href="">LOGO</a> </h3>
      </div>
      <div className="nav-content">
        <ul>
          <li> 
            <a href="" className="home">
              Home
            </a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className="icon">
        <div>
          <a href=""><FaFacebookF /></a> 
        </div>
        <div>
          <a href=""><FaTwitter /></a> 
        </div>
        <div>
          <a href=""> <FaInstagram /></a>
        </div>
      </div>
    </div>
  );
}
