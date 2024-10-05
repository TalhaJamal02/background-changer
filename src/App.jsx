import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className=" w-full h-screen duration-500 " style={{ backgroundColor: color }}>

      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-2xl bg-white  px-3 py-2 rounded-2xl">

          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg font-medium transform hover:-translate-y-1 transition-all duration-400"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >Red</button>

          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg font-medium transform hover:-translate-y-1 transition-all duration-400"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >Blue</button>

          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg font-medium transform hover:-translate-y-1 transition-all duration-400"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >Green</button>

          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg font-medium transform hover:-translate-y-1 transition-all duration-400"
            style={{ backgroundColor: "grey" }}
            onClick={() => setColor("grey")}
          >Grey</button>

          <button className=" outline-none px-4 py-1 rounded-full text-black shadow-lg font-medium transform hover:-translate-y-1 transition-all duration-400"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >Yellow</button>

          <button className=" outline-none px-4 py-1 rounded-full text-black shadow-lg font-medium transform hover:-translate-y-1 transition-all duration-400"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >Pink</button>

          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg font-medium transform hover:-translate-y-1 transition-all duration-400"
            style={{ backgroundColor: "teal" }}
            onClick={() => setColor("teal")}
          >Teal</button>

          <button className=" outline-none px-4 py-1 rounded-full text-black shadow-lg font-medium transform hover:-translate-y-1 transition-all duration-400"
            style={{ backgroundColor: "white" }}
            onClick={() => setColor("white")}
          >White</button>

          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg font-medium transform hover:-translate-y-1 transition-all duration-400"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >Black</button>

        </div>
      </div>
    </div>
  )
}

export default App;
