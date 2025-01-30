import * as React from "react"

import { Button } from "@/components/ui/button"
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
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

export function TaskForm() {

    async function createTask(formData: FormData) {
        "use server"
        const name = formData.get("name")?.toString()
        const description = formData.get("description")?.toString()
        const priority = formData.get("priority")?.toString()

        console.log({ name, description, priority });

        if (!name || !description || !priority) {
            return;
        }

        const newTask = await prisma.task.create({
            data: {
                name: name,
                description: description,
                priority: priority
            }
        })

        console.log(newTask);
        redirect('/')
    }

    return (
        <form action={createTask}>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Crear tarea</CardTitle>
                    <CardDescription>Llena el formulario debajo para crear una nueva tarea</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Nombre</Label>
                            <Input
                                name="name"
                                id="name"
                                placeholder="Nombre de tu tarea"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="description">Descripción</Label>
                            <Textarea
                                name="description"
                                id="description"
                                placeholder="Descripción de la tarea..."
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="priority">Prioridad</Label>
                            <Select
                                name="priority">
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
                    <Button variant="outline">Cancel</Button>
                    <Button
                        type="submit">Listo</Button>
                </CardFooter>
            </Card>
        </form>
    )
}
