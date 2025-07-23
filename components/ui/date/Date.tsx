import { parseISO, format } from 'date-fns';

interface IDateProps {
  dateString: string;
}

const Date = ({ dateString }: IDateProps) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'yyyy MMM dd')}</time>;
};

export default Date;
