import { parseISO, format, isValid } from 'date-fns';

interface DateProps {
  dateString: string | Date;
}

export default function Date({ dateString }: DateProps) {
  if (!dateString) {
    console.warn('No dateString provided to Date component:', dateString);
    return <time>Invalid Date</time>;
  }

  // Handle both Date objects and strings
  let date: globalThis.Date;
  let dateTimeAttribute: string;

  if (dateString instanceof globalThis.Date) {
    // If it's already a Date object
    date = dateString;
    dateTimeAttribute = date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  } else if (typeof dateString === 'string') {
    // If it's a string, try to parse it
    date = parseISO(dateString);
    dateTimeAttribute = dateString;
  } else {
    console.warn(
      'Invalid dateString type provided to Date component:',
      typeof dateString,
      dateString,
    );
    return <time>Invalid Date</time>;
  }

  // Check if the date is valid
  if (!isValid(date)) {
    console.warn('Invalid date parsed in Date component:', dateString);
    // Try with native Date constructor as fallback if it was a string
    if (typeof dateString === 'string') {
      const fallbackDate = new globalThis.Date(dateString);
      if (isValid(fallbackDate)) {
        return (
          <time dateTime={dateString}>
            {format(fallbackDate, 'yyyy MMM dd')}
          </time>
        );
      }
    }
    return <time>Invalid Date</time>;
  }

  return (
    <time dateTime={dateTimeAttribute}>{format(date, 'yyyy MMM dd')}</time>
  );
}
