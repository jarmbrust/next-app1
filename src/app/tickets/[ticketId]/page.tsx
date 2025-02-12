import { initialTickets } from "@/data";

type TicketPageProps = {
    params: Promise<{
      ticketId: string;
    }>;
};
const TicketsPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  const ticket = initialTickets.find((tic) => tic.id === ticketId);
  if (!ticket) {
    return <h2>Ticket not found...</h2>
  }
  return (
    <div className="text-lg">
      <h2>{ ticket.id}</h2>
      <p>{ ticket.content} </p>
    </div>
  );
};

export default TicketsPage;
