import Navbar from '../Components/Navbar/Navbar'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main> 
  <Navbar/>
  This is the Home Page </main>;
}
