 import next from "next"

 export default function Navbar(){
  return(  
 <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
            <a className="text-white text-xl font-bold">Logo</a>
        </div>
        <div className="flex space-x-4">
            <a className="text-white hover:text-gray-300">Home</a>
            <a className="text-white hover:text-gray-300">About</a>
            <a className="text-white hover:text-gray-300">Services</a>
            <a className="text-white hover:text-gray-300">Contact</a>
         </div>
      </div>
    </nav>
  );
 }
