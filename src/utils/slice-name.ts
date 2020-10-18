const sliceName = (name: string, maxLength: number): string => {
  if (name.length > maxLength) {
    return `${name.slice(0, name.length)}...`;
  }
  return name;
};

export default sliceName;
