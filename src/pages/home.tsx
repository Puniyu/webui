import { DashBoard_ROUTE } from '@/utils/router';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(DashBoard_ROUTE, { replace: true });
  }, [navigate]);

  return null;
}