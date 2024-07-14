import Image from "next/image";

export default function ToDoList(){
  return(
    <div>
      <h1>Daftar Tugas Putri</h1>
      <img 
        src="/images/cewek.jpg" 
        alt="Putri" 
        className="photo"
        style={{
          width:"110px",
          height:"110px"
        }}
      />

      <ul>
        <li>Mengerjakan PR</li>
        <li>Pergi Belanja</li>
        <li>Minum Vitamin</li>
      </ul>
    </div>
  );
}