import Random from "./components/Random";
import Tags from "./components/Tags";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background overflow-x-hidden">
      
      <h1 className="w-11/12 text-center mt-[40px] ml-[50px] mx-auto items-center text-4xl bg-white rounded-lg">RANDOM GIFS</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px] ">
        <Random></Random>
        <Tags></Tags>
      </div>

    </div>
  )
}
 