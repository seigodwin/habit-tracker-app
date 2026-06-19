import { eachDayOfInterval, endOfWeek, format, startOfWeek } from "date-fns";
import { Button } from "./Button";

export function HabitList(){
    const habits: Habit[] = [{id: "a" , name:"Read"}];

    if(habits.length === 0){
        return <p className="text-center text-zinc-500 py-12">
            No habits yet. Add one to get started</p>
    }

    return<div className="flex flex-col gap-3">
        {habits.map(h => (
             <HabitItem habit={h}></HabitItem>
        ))}
    </div>
}

type Habit = {
    id: string;
    name: string;
};

type HabitItemProps = {
    habit: Habit;
};

const visibleDates = eachDayOfInterval({start: startOfWeek(new Date() , {weekStartsOn: 1}) , end: endOfWeek(new Date() , {weekStartsOn: 1})})

function HabitItem({habit}: HabitItemProps){
    return <div className="rounded-xl bg-zinc-800 p-4">
        <div className="flex items-center justify-between mb-3">
            <div className="flex gap-3 items-center">
                <span className="font-medium">{habit.name}</span>
                <span className="text-sm text-amber-400">🔥 3</span>
            </div>
            <Button variant="ghost-destructive">Delete</Button>
        </div>
        <div className="flex gap-1.5">
            {visibleDates.map( d => (
                <Button key={d.toISOString()}>
                    <span className="font-medium">{format(d , "EEE")}</span>
                    <span>{format(d , "d")}</span>
                </Button>
            ))}
        </div>
    </div>
}