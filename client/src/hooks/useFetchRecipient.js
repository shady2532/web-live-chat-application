import { useEffect, useState } from "react";
import { baseURL, getRequest } from "../utils/services";

export const useFetchRecipientUser = (chat, user) => {
  const [recipientUser, setRecipientUser] = useState(null);
  const [error, setError] = useState(null);

  const recipientID = chat?.members.find((ID) => ID !== user?._id);

  useEffect(() => {
    const getUser = async () => {
      if (!recipientID) return null;
      const response = await getRequest(`${baseURL}/users/find/${recipientID}`);
      if (response.error) return setError(response);
      setRecipientUser(response);
    };

    getUser();
  }, []);
  return (recipientUser);
};
