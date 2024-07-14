import MyProfile from "./profile";

export default function Gallery(){
  return(
    <div className="col-3">
      <MyProfile/>
      <MyProfile/>
      <MyProfile/>
    </div>
  );
}