import { parseISO, format, isValid } from 'date-fns';

interface DateProps {
  dateString: string;
}

export default function Date({ dateString }: DateProps) {
  if (!dateString || typeof dateString !== 'string') {
    console.warn('Invalid dateString provided to Date component:', dateString);
    return <time>Invalid Date</time>;
  }
  
  // Parse the date string
  const date = parseISO(dateString);
  
  // Check if the date is valid
  if (!isValid(date)) {
    console.warn('Invalid date parsed in Date component:', dateString);
    // Try with native Date constructor as fallback
    const fallbackDate = new globalThis.Date(dateString);
    if (isValid(fallbackDate)) {
      return <time dateTime={dateString}>{format(fallbackDate, 'yyyy MMM dd')}</time>;
    }
    return <time>Invalid Date</time>;
  }

  return <time dateTime={dateString}>{format(date, 'yyyy MMM dd')}</time>;
}
