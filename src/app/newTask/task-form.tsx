import { Button, buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { createTask, updateTask } from "@/actions/taskActions"
import { Task } from "@prisma/client"
import Link from "next/link"


export function TaskForm({ task }: { task?: Task }) {

    const functionAction = task?.id ? updateTask : createTask;


    return (
        <form action={functionAction}>
            <input type="hidden" name="id" value={task?.id} />
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>
                        {task?.id ? "Actualizar tarea" : "Crear tarea"}
                    </CardTitle>
                    <CardDescription> {task?.id ? "Puedes modificar el formulario debajo" : "Llena el siguiente formulario para crear la tarea"}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Nombre</Label>
                            <Input
                                name="name"
                                id="name"
                                placeholder="Nombre de la tarea..."
                                defaultValue={task?.name}
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="description">Descripción</Label>
                            <Textarea
                                name="description"
                                id="description"
                                placeholder="Descripción de la tarea..."
                                defaultValue={task?.description || ""}
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="priority">Prioridad</Label>
                            <Select
                                name="priority"
                                defaultValue={task?.priority}>
                                <SelectTrigger id="priority">
                                    <SelectValue placeholder="Seleccionar" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="Baja">Baja</SelectItem>
                                    <SelectItem value="Media">Media</SelectItem>
                                    <SelectItem value="Alta">Alta</SelectItem>
                                    <SelectItem value="Urgente">Urgente</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Link
                        href="/"
                        className={buttonVariants({ variant: "secondary" })}>
                        Cancel
                    </Link>
                    <Button
                        type="submit">
                        {task?.id ? "Actualizar" : "Crear"}
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}
