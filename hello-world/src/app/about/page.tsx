import Image from "next/image";
import Profile from "@/components/profile";
import MyProfile from "@/components/profile";
import Gallery from "@/components/gallery";
import ToDoList from "@/components/todolist";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className=""
          style={{
            backgroundColor:'#433D8B'
          }}
    >
    <Navbar />
    <h1 className="text-cyan-600 font-bold text-9x1 text-center">hello world</h1>
    <p className="text-cyan-600 font-bold text-20x1">hello about</p>
     <MyProfile/>
    <Gallery/>
    <ToDoList/>
    </div>
    
  );
}
