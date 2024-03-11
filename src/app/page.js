import AllProducts from "@/components/allproducts/AllProducts";
import Catagorie from "@/components/catagorie/Catagorie";
import JustArrive from "@/components/justArive/JustArrive";
import Lable from "@/components/label/Lable";
import NaveBar from "@/components/naveBar/NaveBar";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <NaveBar/>
  <Catagorie/>
  <Lable/>
  <AllProducts/>
  <JustArrive/>
  </>
  );
}
