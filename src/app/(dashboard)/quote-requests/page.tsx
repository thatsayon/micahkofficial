import './quote.css';

const quotes = [
  { id: 'QR-1001', date: '2023-10-24', customer: 'Michael Rodriguez', address: '4521 Oak Street, Austin TX', phone: '01566325974', email: 'michel@gmail.com', service: 'AC Installation', category: 'Residential', schedule: '12 March, 2026 : 12:30 PM', price: '$140-$480' },
  { id: 'QR-1002', date: '2023-10-23', customer: 'Sarah Jenkins', address: '890 Pine Lane, Austin TX', phone: '01523659874', email: 'Sarah@gmail.com', service: 'Furnace Repair', category: 'Residential', schedule: '20 November, 2026 : 12:30 PM', price: '$280-$369' },
  { id: 'QR-1003', date: '2023-10-22', customer: 'TechFlow Inc.', address: '100 Innovation Dr, Austin TX', phone: '01882365985', email: 'Techflow@gmail.com', service: 'Commercial HVAC', category: 'Commercial', schedule: '18 December, 2026 : 12:30 PM', price: '$280-$560' },
  { id: 'QR-1004', date: '2023-10-20', customer: 'David Chen', address: '334 Maple Ave, Austin TX', phone: '01859632501', email: 'David@gmail.com', service: 'Air Duct Cleaning', category: 'Residential', schedule: '18 December, 2026 : 12:30 PM', price: '$280-$560' },
  { id: 'QR-1005', date: '2023-10-19', customer: 'Emily White', address: '777 Cedar Blvd, Austin TX', phone: '01485965236', email: 'emily@gmail.com', service: 'Thermostat Installation', category: 'Residential', schedule: '13 March, 2026 : 12:30 PM', price: '$355-$900' },
];

export default function QuoteRequests() {
  return (
    <div className="quote-requests">
      <div className="page-header">
        <div>
          <h1 className="page-title">Quote Requests</h1>
          <p className="page-subtitle">Manage and track all incoming service inquiries.</p>
        </div>
      </div>

      <div className="card table-card">
        <div className="table-controls">
          <input type="text" placeholder="Search quotes..." className="search-input" />
          <select className="filter-select">
            <option>All Service</option>
            <option>AC Installation</option>
            <option>Furnace Repair</option>
          </select>
        </div>

        <div className="table-responsive">
          <table className="quotes-table">
            <thead>
              <tr>
                <th>REF / Date</th>
                <th>Customer Details</th>
                <th>Number / Email</th>
                <th>Service Type</th>
                <th>Schedule</th>
                <th>EST. Price</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((quote) => (
                <tr key={quote.id}>
                  <td>
                    <div className="td-primary">{quote.id}</div>
                    <div className="td-secondary">{quote.date}</div>
                  </td>
                  <td>
                    <div className="td-primary">{quote.customer}</div>
                    <div className="td-secondary">{quote.address}</div>
                  </td>
                  <td>
                    <div className="td-primary">{quote.phone}</div>
                    <div className="td-secondary">{quote.email}</div>
                  </td>
                  <td>
                    <div className="td-primary">{quote.service}</div>
                    <div className="td-secondary">{quote.category}</div>
                  </td>
                  <td className="td-primary">{quote.schedule}</td>
                  <td className="td-primary">{quote.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span className="showing-text">Showing 1 to 5 of 5 entries</span>
          <div className="pagination">
            <button className="page-btn disabled">Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
