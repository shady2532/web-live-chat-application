export const baseURL = "http://localhost:5000/api";

export const postRequest = async (URL, body) => {
  //  console.log("body", body);
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  //console.log(response.status);
  const data = await response.json();
  //console.log(data);
  if (!response.ok) {
    let message;

    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }

    return { error: true, message };
  }

  return data;
};