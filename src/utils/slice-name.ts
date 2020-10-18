const sliceName = (name: string, maxLength: number) => {
  if (name.length > maxLength) {
    return `${name.slice(0, name.length)}...`;
  }
  return name;
};

export default sliceName;
