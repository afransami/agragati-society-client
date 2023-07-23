import React, { useEffect, useState } from 'react';

export const useAdminDashboard = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/admin?email=${email}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not OK');
          }
          return res.json();
        })
        .then((data) => {
          if (data.role === 'admin') {
            console.log(data);
            setIsAdmin(true);
            setIsAdminLoading(false);
          } else {
            setIsAdmin(false);
            setIsAdminLoading(false);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          setIsAdmin(false);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  
  return [isAdmin, isAdminLoading];
};
