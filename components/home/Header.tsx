import Image from 'next/image';
import Appointment from './Appointment';
import Componaydetails from './Companydetails';
import Animation from '../Animation';

const Header = () => {
  return (
    <section>


      <div>
        <div className="comp-details">
          <div className="comp-details-wrapper">
            <Animation>
            <div className="comp-bx1">
              <Componaydetails />
            </div>
            <div className="comp-bx2">
              <Appointment />
            </div>
            </Animation>
          </div>
        </div>
      </div>

      <div className="header-right-box">
        <div className="header-img">
          <Image
            width={500}
            height={400}
            src="/images/accounts.png"
            alt="Header"
          />
        </div>
        <div className="small-header-img"></div>
      </div>
    </section>
  );
};
export default Header;
