import { Button } from "./button"
import { removeTask } from "@/actions/taskActions"

const TaskButtonDelete = ({ taskId }: { taskId: number }) => {

    return (
        <form action={removeTask}>
            <input type="hidden" name="taskId" value={taskId} />
            <Button variant={"destructive"}>
                Borrar
            </Button>
        </form>
    )
}

export default TaskButtonDelete