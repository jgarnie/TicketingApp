import { Ticket } from '@prisma/client';
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import TicketStatusBadge from '../../components/TicketStatusBadge';
import TicketPriority from '../../components/TicketPriority';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { SearchParams } from './page';

interface Props {
  tickets: Ticket[];
  searchParams: SearchParams;
}

function DataTable({ tickets, searchParams }: Props) {
  return (
    <div className="w-full mt-5">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Link href={{ query: { ...searchParams, orderBy: 'title' } }}>
                  Title
                </Link>
                {'title' === searchParams.orderBy && (
                  <ArrowDown className="inline p-1" />
                )}
              </TableHead>

              <TableHead>
                <Link href={{ query: { ...searchParams, orderBy: 'status' } }}>
                  Status
                </Link>
                {'status' === searchParams.orderBy && (
                  <ArrowDown className="inline p-1" />
                )}
              </TableHead>

              <TableHead>
                <Link
                  href={{ query: { ...searchParams, orderBy: 'priority' } }}
                >
                  Priority
                </Link>
                {'priority' === searchParams.orderBy && (
                  <ArrowDown className="inline p-1" />
                )}
              </TableHead>

              <TableHead>
                <Link
                  href={{ query: { ...searchParams, orderBy: 'createdAt' } }}
                >
                  Created At
                </Link>
                {'createdAt' === searchParams.orderBy && (
                  <ArrowDown className="inline p-1" />
                )}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets
              ? tickets.map((ticket) => (
                  <TableRow key={ticket.id} data-href="/">
                    <TableCell>
                      <Link href={`tickets/${ticket.id}`}> {ticket.title}</Link>
                    </TableCell>
                    <TableCell>
                      <TicketStatusBadge status={ticket.status} />
                    </TableCell>
                    <TableCell className="flex">
                      <TicketPriority priority={ticket.priority} />
                    </TableCell>
                    <TableCell>
                      {ticket.createdAt.toLocaleDateString('es-ES', {
                        year: '2-digit',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: false,
                      })}
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default DataTable;
