import React from 'react';
import dynamic from 'next/dynamic';

const TicketForm = dynamic(() => import('@/components/ticket-form'), {
  ssr: false,
});

function NewTicket() {
  return (
    <div>
      <TicketForm />
    </div>
  );
}

export default NewTicket;
