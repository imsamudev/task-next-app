"use client";

import { useTransition } from "react";
import { Check, Undo2 } from "lucide-react";
import { markTaskCompleted } from "@/actions/taskActions";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function MarkCompleteButton({
  taskId,
  completed,
}: {
  taskId: number,
  completed: boolean,
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant={completed ? "outline" : "secondary"}
            aria-label={
              completed ? "Marcar como pendiente" : "Marcar como completada"
            }
            onClick={() =>
              startTransition(() => markTaskCompleted(taskId, !completed))
            }
            disabled={isPending}
            className="rounded-full"
          >
            {completed ? (
              <Undo2 className="w-4 h-4" />
            ) : (
              <Check className="w-4 h-4" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {completed ? "Marcar como pendiente" : "Marcar como hecho"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}