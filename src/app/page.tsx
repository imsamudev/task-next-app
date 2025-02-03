import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import prisma from "@/lib/prisma"
import clsx from "clsx"

async function HomePage() {

  const tasks = await prisma.task.findMany()
  console.log(tasks)

  return (
    <div className="grid grid-cols-3 gap-4">
      {tasks.map((task) => (
        <Card key={task.id}>
          <CardHeader className="flex flex-row justify-between">
            <CardTitle>
              {task.name}
            </CardTitle>
            <Badge
              className={
                clsx({
                  "bg-red-600": task.priority === "Urgente",
                  "bg-orange-500": task.priority === "Alta",
                  "bg-yellow-500": task.priority === "Media",
                  "bg-green-500": task.priority === "Baja"
                })
              }>
              {task.priority}
            </Badge>
          </CardHeader>
          <hr className="my-1" />
          <CardContent>
            <div className="flex flex-col gap-y-4">
              <p>{task.description}</p>
              <hr className="my-1" />
              <div className="flex flex-col">
                <span className="text-slate-400">{new Date(task.createdAt).toLocaleDateString()}</span>
                <span className="text-slate-500">{new Date(task.createdAt).toLocaleTimeString()}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-x-2 justify-end">
            <Button variant={"destructive"}>
              Borrar
            </Button>
            <Button>
              Editar
            </Button>
          </CardFooter>
        </Card>

      ))
      }
    </div >
  )
}

export default HomePage