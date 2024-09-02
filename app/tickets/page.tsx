import React from 'react';
import prisma from '../../prisma/db';
import DataTable from './DataTable';
import Link from 'next/link';
import { buttonVariants } from '../../components/ui/button';

const Tickets = async () => {
  const ticketList = await prisma.ticket.findMany();
  console.log({ ticketList });

  return (
    <>
      <Link
        href={`/tickets/new/`}
        className={`${buttonVariants({
          variant: 'secondary',
        })}`}
      >
        New Ticket
      </Link>
      <DataTable tickets={ticketList} />
    </>
  );
};

export default Tickets;
