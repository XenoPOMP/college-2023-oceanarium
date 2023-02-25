const parseDate = (date: string): string => {
  const pattern = /\d{4}-\d{2}-\d{2}/gi;

  // prettier-ignore
  // @ts-ignore
  const result = pattern.exec(date)
    .toString()
    .split('-')
    .reverse();

  return `${result[0]}.${result[1]}.${result[2]}`;
};

export default parseDate;
