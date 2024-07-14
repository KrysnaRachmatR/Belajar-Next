import Image from "next/image";

export default function MyProfile(){
  return(
    <Image
        src = "/images/soal3.jpg"
      alt="Katherine Johnson"
      width={400}
      height={400}
      style={{
        maxWidth: "100%",
        height: "auto",
        margin: "13px"
      }}
    ></Image>
  );
}

