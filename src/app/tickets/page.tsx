import Link from 'next/link'
import { initialTickets } from '../../data';
import { ticketPath } from '@/paths';

type Ticket = {
  id: string;
  title: string;
  content: string;
  status: string;
}

const TicketsPage = () => {
  return (
    <div>
      {initialTickets.map((ticket: Ticket)=> (
        <div key={ticket.id}>
          <h2 className="text-lg">{ ticket.title }</h2>

          <Link href={ticketPath(ticket.id)} className="text-sm underline">
            View
          </Link>
        </div>
      ))}
    </div>
) 
};

export default TicketsPage;
