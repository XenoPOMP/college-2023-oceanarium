const parseDate = (date: string): string => {
  const pattern = /\d{4}-\d{2}-\d{2}/i;

  // @ts-ignore
  const result = pattern.exec(date)?.toString().split('-').reverse();

  if (result !== undefined) {
    return `${result[0]}.${result[1]}.${result[2]}`;
  }

  return '';
};

export default parseDate;
