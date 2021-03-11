const simpleFetch = async (linkApi: string) => {
  const token = localStorage.getItem('TOKEN');
  const response = await fetch(
    `/api/${linkApi}`,
    token
      ? {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      : {}
  );

  return await response.json();
};

export default simpleFetch;
