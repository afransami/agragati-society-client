import { useEffect, useState } from "react";

export const useMembers = (email) => {
  const [isMember, setIsMember] = useState(false);
  const [isMemberLoading, setIsMemberLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/member?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.role === "member") {
            console.log(data);
            setIsMember(true);
            setIsMemberLoading(false);
          }
        })
        .catch((error) => {
          console.error('Error', error);
          setIsMember(false);
          setIsMemberLoading(false);
        });
    }
  }, [email]);

  return [isMember, isMemberLoading];
};
