import React from 'react';
import prisma from '../../prisma/db';
import DataTable from './DataTable';

const Tickets = async () => {
  const ticketList = await prisma.ticket.findMany();
  console.log({ ticketList });

  return <DataTable tickets={ticketList} />;
};

export default Tickets;
