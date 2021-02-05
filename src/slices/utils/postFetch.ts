const postFetch = async (linkApi: string, body: any) => {
  const token = localStorage.getItem('TOKEN');
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`/api/${linkApi}`, options);
  return await response.json();
};

export default postFetch;
