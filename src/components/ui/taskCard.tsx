import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Task } from "@prisma/client"
import clsx from "clsx"
import TaskButtonDelete from "./taskButtonDelete"
import MarkCompleteButton from "./markCompleteButton";
import Link from "next/link"

const TaskCard = ({
    task,
    completed = false,
}: {
    task: Task;
    completed?: boolean;
}) => {
    return (
        <Card
            className={clsx(
                "bg-secondary transition-opacity relative pb-12",
                completed && "opacity-50"
            )}
        >
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{task.name}</CardTitle>
                <Badge
                    className={clsx({
                        "bg-red-600 animate-pulse": task.priority === "Urgente",
                        "bg-orange-500": task.priority === "Alta",
                        "bg-yellow-500": task.priority === "Media",
                        "bg-green-500": task.priority === "Baja"
                    })}
                >
                    {task.priority}
                </Badge>
            </CardHeader>
            <hr className="bg-background h-1 mx-2" />
            <CardContent className="py-4">
                <p>{task.description}</p>
                <div className="flex flex-col mt-4 sm:items-end">
                    <span className="text-slate-400">{new Date(task.createdAt).toLocaleDateString()}</span>
                    <span className="text-slate-500">{new Date(task.createdAt).toLocaleTimeString()}</span>
                </div>
            </CardContent>
            <CardFooter className="flex sm:justify-end gap-x-2">
                <TaskButtonDelete taskId={task.id} />
                <Link
                    href={`/tasks/${task.id}/editar`}
                    className={buttonVariants({ variant: "default" })}
                >
                    Editar
                </Link>
            </CardFooter>
            <div className="absolute bottom-3 left-3">
                <MarkCompleteButton taskId={task.id} completed={completed} />
            </div>
        </Card>
    );
};

export default TaskCard