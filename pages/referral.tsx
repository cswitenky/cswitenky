import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export default function Donate() {
  return (
    <Layout>
      <h2>Credit cards</h2>
      <p>
        If you're considering applying for a new credit card, please consider
        using one of my referral links below. I'll get a bonus if you're
        approved, and you'll get a bonus too!
      </p>
      <ul>
        <li>
          <a href="https://www.referyourchasecard.com/6j/B6PZTWK1BW">
            Chase Sapphire Preferred
          </a>
        </li>
        <li>
          <a href="https://www.referyourchasecard.com/18o/JJM3TPE58A">
            Chase Freedom
          </a>
        </li>
        <li>
          <a href="https://refer.discover.com/s/xgc4r2?advocate.partner_share_id=572672151">
            Discover It
          </a>
        </li>
        <li>
          <a href="https://bilt.page/r/TBGL-GYH6">Bilt Rewards</a>
        </li>
      </ul>

      <h2>Bank account(s)</h2>
      <p>
        I encourage you to open a SoFi Money account to earn ~4.5% APY on your
        savings. It's a great place to park your emergency fund. You can also
        get a bonus if you use my referral link below.
      </p>
      <ul>
        <li>
          <a href="https://www.sofi.com/invite/money?gcp=ee5e268e-69b3-4e6c-bcc1-560f1cdd595f&isAliasGcp=false">
            SoFi Checking/Savings
          </a>
        </li>
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
