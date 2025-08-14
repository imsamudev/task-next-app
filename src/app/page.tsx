import prisma from "@/lib/prisma";
import TaskCard from "@/components/ui/taskCard";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default async function HomePage() {
  const tasks = await prisma.task.findMany({ orderBy: { createdAt: "desc" } });

  const pendientes = tasks.filter(t => !t.completed);
  const realizadas = tasks.filter(t => t.completed);

  return (
    <div className="max-w-5xl mx-auto py-8">
      <Accordion type="multiple" defaultValue={["pendientes"]}>
        <AccordionItem value="pendientes">
          <AccordionTrigger>Tareas pendientes</AccordionTrigger>
          <AccordionContent>
            {pendientes.length === 0 ? (
              <p className="text-muted-foreground">No hay tareas pendientes.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {pendientes.map(task => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="realizadas">
          <AccordionTrigger>Tareas realizadas</AccordionTrigger>
          <AccordionContent>
            {realizadas.length === 0 ? (
              <p className="text-muted-foreground">No hay tareas realizadas.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {realizadas.map(task => (
                  <TaskCard key={task.id} task={task} completed />
                ))}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}