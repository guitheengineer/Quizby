const simpleFetch = async (linkApi: string, token?: string) => {
  let response;
  if (!token) {
    response = await fetch(`/api/${linkApi}`);
  } else {
    response = await fetch(`/api/${linkApi}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  }
  return response.json();
};

export default simpleFetch;
