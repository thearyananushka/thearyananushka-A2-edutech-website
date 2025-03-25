import { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: #3b82f6; /* Blue background for the entire container */
  min-height: 100vh; /* Ensures it covers the full viewport height */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: white; /* White background for content */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #34495e;
  margin-bottom: 20px;
  text-align: center;
`;

const TransactionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;

  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: #2c3e50;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SubscriptionSection = styled.div`
  margin-top: 40px;
`;

const SubscriptionCard = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const SubscriptionTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #2c3e50;
`;

const SubscriptionDetails = styled.p`
  margin: 5px 0;
  color: #555;
`;

const RefundButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #16a085;
  }
`;

const MenuButton = styled(FaBars)`
  color: #3b82f6; /* Set FaBars color to blue */
`;

const Payment = () => {
  const transactions = [
    { id: 1, date: '2024-10-01', amount: '$200', status: 'Completed' },
    { id: 2, date: '2024-10-15', amount: '$150', status: 'Pending' },
    { id: 3, date: '2024-10-20', amount: '$300', status: 'Refunded' },
  ];

  const subscriptions = [
    { id: 1, plan: 'Basic Plan', details: 'Access to all basic courses', price: '$99/month' },
    { id: 2, plan: 'Pro Plan', details: 'Access to all courses and live sessions', price: '$199/month' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Container>
      <ContentWrapper>
        <button onClick={toggleMenu} className="lg:hidden p-2">
          <MenuButton size={30} /> {/* Use the styled MenuButton with blue color */}
        </button>

        {menuOpen && (
          <div className="fixed inset-0 bg-blue-900 bg-opacity-95 z-50 flex flex-col items-center justify-center text-white">
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-3xl">
              <FaTimes />
            </button>
            <nav className="flex flex-col gap-6 text-center text-lg">
              <Link to="/dashboard" className="hover:underline">Home</Link>
              <Link to="/trainer" className="hover:underline">Trainer Section</Link>
              <Link to="/student" className="hover:underline">Student Section</Link>
              <Link to="/course" className="hover:underline">Course Section</Link>
              <Link to="/exam" className="hover:underline">Exam</Link>
              <Link to="/payment" className="hover:underline">Payment</Link>
              <Link to="/help" className="hover:underline">Help Centre</Link>
              <Link to="/settings" className="hover:underline">Settings</Link>
              <Link to="/report" className="hover:underline">Report</Link>
            </nav>
          </div>
        )}

        <Title>Payment & Subscription Management</Title>

        <h3>Recent Transactions</h3>
        <TransactionTable>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.status}</td>
                <td>
                  {transaction.status === 'Refunded' ? (
                    'N/A'
                  ) : (
                    <RefundButton>Refund</RefundButton>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>

        <SubscriptionSection>
          <h3>Subscription Plans</h3>
          {subscriptions.map((sub) => (
            <SubscriptionCard key={sub.id}>
              <SubscriptionTitle>{sub.plan}</SubscriptionTitle>
              <SubscriptionDetails>{sub.details}</SubscriptionDetails>
              <SubscriptionDetails>{sub.price}</SubscriptionDetails>
            </SubscriptionCard>
          ))}
        </SubscriptionSection>
      </ContentWrapper>
    </Container>
  );
};

export default Payment;
