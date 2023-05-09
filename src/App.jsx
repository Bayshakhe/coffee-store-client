import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)
  console.log(coffees);

  return (
    <>
      <h1 className="text-orange-600 text-center font-bold text-3xl m-5">
        Hot Hot Cold Coffee
      </h1>
      <div className="grid md:grid-cols-2 gap-5 md:mx-32">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
