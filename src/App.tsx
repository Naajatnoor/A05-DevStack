import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Technology from "./components/Technology/Technology";
import type { Technology as TechnologyType } from "./type";
import { Suspense } from "react";


const technologyFetch = async (): Promise<TechnologyType[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
};


function App() {

 const technologyPromise = technologyFetch();

  return (
    <>
    
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading...</h2>}>
                <Technology technologyPromise={technologyPromise}></Technology>
            </Suspense>
      {/* <Technology technologyPromise={technologyPromise }></Technology> */}
                 <Footer></Footer>

    </>
  )
}

export default App
 