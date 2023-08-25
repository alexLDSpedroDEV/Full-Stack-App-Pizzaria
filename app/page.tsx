import SlideBar from "@/components/SlideBar";
import NavBar from "../components/NavBar";
import Carrosel from "@/components/Carrosel/Carrosel";
import Delicius from "@/components/Delicius";


export default function Home() {
  return (
    <div>
      <NavBar/>
      <SlideBar/>
      <Carrosel/>
      <Delicius/>
    </div>
  )
}
