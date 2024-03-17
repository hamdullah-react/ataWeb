
import AllProducts from "@/components/allproducts/AllProducts";
import Catagorie from "@/components/catagorie/Catagorie";
import { useCategoryContext } from "@/components/context/CategoryContext";
import JustArrive from "@/components/justArive/JustArrive";
import Lable from "@/components/label/Lable";
import Headerslider from "@/components/slider/Headerslider";





export default function Home() {

  return (
  <>
   
   <Headerslider/>
  <Catagorie/>
  <Lable/>
  <AllProducts/>
  <JustArrive/>
  
  
 
  </>
  );
}
