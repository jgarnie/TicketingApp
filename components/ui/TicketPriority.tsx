import { Priority } from '@prisma/client';
import { Flame } from 'lucide-react';
import React from 'react';

interface Props {
  priority: Priority;
}

const priotityMap: Record<Priority, { label: string; level: 1 | 2 | 3 }> = {
  HIGH: { label: 'High', level: 3 },
  MEDIUM: { label: 'Medium', level: 2 },
  LOW: { label: 'Low', level: 1 },
};

function TicketPriority({ priority }: Props) {
  return (
    <>
      <Flame
        className={`${priotityMap[priority].level >= 1 ? 'text-red-500' : 'text-muted'}`}
      />
      <Flame
        className={`${priotityMap[priority].level >= 2 ? 'text-red-500' : 'text-muted'}`}
      />
      <Flame
        className={`${priotityMap[priority].level >= 3 ? 'text-red-500' : 'text-muted'}`}
      />
    </>
  );
}

export default TicketPriority;
