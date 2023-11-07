import SlideBar from "@/components/SlideBar";
import NavBar from "../components/NavBar";
import Carrosel from "@/components/Carrosel/Carrosel";
import Delicius from "@/components/Delicius";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Home() {
  return (
    <div>
      <NavBar/>
      <SlideBar/>
      <Carrosel/>
      <Delicius/>
      <Footer/>
      <ToastContainer position="bottom-left" />
    </div>
  )
}
