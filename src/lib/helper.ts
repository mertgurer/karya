export function formatProjectDate(
  isoDateString: string,
  locale: string
): string {
  const date = new Date(isoDateString);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString(locale, options);
}

export function formatProjectNumber(number: number, locale: string) {
  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return formatter.format(number);
}
