import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Technology from "./components/Technology/Technology";
import type { Technology as TechnologyType } from "./type";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";


const technologyFetch = async (): Promise<TechnologyType[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
};


function App() {

 const technologyPromise = technologyFetch();
 const [stack, setStack] = useState<TechnologyType[]>([]);

  return (
    <>
         <ToastContainer  position="bottom-right"/>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h1></h1>}>
      <Technology technologyPromise={technologyPromise}    stack={stack}
       setStack={setStack}></Technology>
       </Suspense>
       <Footer></Footer>

    </>
  )
}

export default App
 