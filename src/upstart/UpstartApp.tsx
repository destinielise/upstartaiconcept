import { Routes, Route } from 'react-router';
import { Home } from './pages/Home';
import { LoanDetail } from './pages/LoanDetail';

export function UpstartApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loan/:loanId" element={<LoanDetail />} />
    </Routes>
  );
}
