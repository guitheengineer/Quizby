const postFetch = async (linkApi: string, body: any) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`/api/${linkApi}`, options);
  return await response.json();
};

export default postFetch;
