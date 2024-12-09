"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Description from "@/components/Description";
import ContactUs from "@/components/ContactUs";
import ContactForm from "@/components/ContactForm";
import ItemCards from "@/components/ItemCards";
import Recommendation from "@/components/Recommendation";

export default function Home() {
 
  return (
    <div>
      <Header/>
      <Main/>
      <Description/>
      <ItemCards/>
      <Recommendation/>
      <ContactUs/>
      <ContactForm/>
      <Footer/>
      
    </div>
    
  );
}
