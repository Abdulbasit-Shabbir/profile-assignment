import Header from "@/components/header";
import Footer from "@/components/footer"
import Image from "next/image";
import developer from "@/public/developer.jpg"



export default function Home() {
  return (
   <div>
     <Header/>
     
  <div className="content">
  <div className="image">
        <Image src={developer} alt="basit" width={300} height={300} />
</div>
<h1> I'm Abdul Basit,</h1>
<div> <p className="parah"> a passionate front-end developer with a focus on crafting beautiful, user-friendly websites and applications.
     I have a background in web development, with expertise in HTML, CSS, and TypeScript.
     I'm currently exploring full-stack development with Next.js.
     I love solving problems, working on challenging projects, and collaborating with creative teams to bring ideas to life.
     </p></div>
    </div>
     <Footer/>
   </div>
       
  );
}
