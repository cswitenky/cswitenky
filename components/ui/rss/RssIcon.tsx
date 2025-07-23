import Link from 'next/link';
import Image from 'next/image';

const RssIcon = () => (
  <Link
    href="/rss.xml"
    aria-label="Go to RSS Feed"
    data-umami-event="RSS Feed Button"
  >
    <Image
      className="favicon"
      priority
      src="/rss.svg"
      height={16}
      width={16}
      alt="RSS Feed Icon"
    />
  </Link>
);

export default RssIcon;
