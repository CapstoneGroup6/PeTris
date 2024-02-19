import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";

export default function Home() {
  
    return (
      <>
        
        <h1>Home Page</h1> 
        <Link to="/Game">Play Now</Link>
      </>
    )
  }
