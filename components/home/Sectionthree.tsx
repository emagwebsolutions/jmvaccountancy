import Title from '../utils/Title';
import Details from '../utils/Details';
import Appointment from './Appointment';
import Image from 'next/image';
import Animation from '../Animation';

const Sectionthree = () => {
  const obj = {
    one: 'Reporting: Help directors make informed decisions',
    two: 'Capital Fundraising: Advice on seeking equity to help grow your business',
    three:
      'Mergers & Acquisitions: Financial planning for mergers and acquisitions',
  };

  return (
    <section>
      <div className="sec3 flexbx">
        
          <div className="col3 sec2-co3">
            <div className="imgBx3">
              <Animation>
              <Image
                width={600}
                height={500}
                src="/images/advisory.jpg"
                alt="Advisory"
              />
              </Animation>
            </div>
          </div>
        

        
          <div className="col4">
            <div className="exp-title-bx3">
              <div className="expdt3">
                <Animation>
                <Title title="Advisory" caption="Our Small Business Services" />
                <Details obj={obj} />
                </Animation>
              </div>
            </div>
          </div>
        
      </div>

      <div className="appointment-bx">
        <Appointment />
      </div>
    </section>
  );
};
export default Sectionthree;
