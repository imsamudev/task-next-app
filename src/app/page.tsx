import TaskCard from "@/components/ui/taskCard";
import prisma from "@/lib/prisma";

async function HomePage() {
  const tasks = await prisma.task.findMany();

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-3 2xl:grid-cols-5 gap-4 m-2">
      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] bg-secondary shadow-lg rounded-lg p-6 text-center">
          <p className="text-slate-400 mt-2">
            Selecciona "Crear Tarea" para comenzar.
          </p>
        </div>
      ) : (
        tasks.map((task) => <TaskCard task={task} key={task.id} />)
      )}
    </div>
  );
}

export default HomePage;
