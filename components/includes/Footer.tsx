import Link from 'next/link';
import Animation from '../Animation';

const Footer = () => {
  return (
    <footer>
      <Animation>
        <h2>JMV ACCOUNTANCY</h2>
        <h4>SOLUTIONS LTD.</h4>
        <h4>59 Livingstone Road</h4>
        <h4>Thornton Heath</h4>
        <h4>CR7 8JX</h4>
      </Animation>

      <Animation>
        <div className="footer-social">
          <Link href="/#">
            <i className="fa fa-facebook fa-lg"></i>
          </Link>
          <Link href="/#">
            <i className="fa fa-twitter fa-lg"></i>
          </Link>
          <Link href="/#">
            <i className="fa fa-instagram fa-lg"></i>
          </Link>
        </div>
      </Animation>

      <Animation>
        <p>
          &copy; {new Date().getFullYear()} JMV ACCOUNTANCY SOLUTIONS LTD. All
          rights reserved.
        </p>
      </Animation>
    </footer>
  );
};
export default Footer;
