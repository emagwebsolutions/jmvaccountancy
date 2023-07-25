import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type sh = {
  show: boolean;
  hide: () => void;
};

const Nav = ({ show, hide }: sh) => {
  const path = usePathname();

  return (
    <>
      <nav>

        <div className="container">


          <div className={`${show ? 'show' : ''}  navbx`}>
            <div className="logoimg">
              <Image width={60} height={60} src="/images/logo.jpg" alt="Logo" />
            </div>
            <div>
              <ul>
                <li>
                  <Link href="/" className={`${path === '/' ? 'active' : ''}`}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className={`${path === '/faq' ? 'active' : ''}`}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`${path === '/contact' ? 'active' : ''}`}
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </div>



          <div
            onClick={hide}
            className={`${show ? 'show' : ''} nav-overlay`}
          ></div>


        </div>



      </nav>
    </>
  );
};
export default Nav;
