import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";

export default function NoPage() {
  
    return (
      <>
        
        <h1>Error 404: Not Found</h1> 
        <Link to="/">Go Home</Link>
      </>
    )
  }
