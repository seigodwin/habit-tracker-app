
import { useState } from "react"
import { HabitForm } from "./Components/HabitForm"
import { HabitList, type Habit } from "./Components/HabitList"
import { Header } from "./Components/Header"

export default function(){
  const [habits , setHabits] = useState<Habit[]>([]);

  function addHabit(name: string){
    setHabits([...habits, {id: crypto.randomUUID(), name}])
  }

    function deleteHabit(id: string){
    setHabits(curr => curr.filter(h => h.id !== id))
  }

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col
    gap-4">
      <Header />
      <HabitForm addHabit={addHabit}/>
      <HabitList deleteHabit={deleteHabit} habits={habits}/>
    </div>
  )
}