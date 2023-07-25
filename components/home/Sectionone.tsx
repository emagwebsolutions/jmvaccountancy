import Title from '../utils/Title';
import Details from '../utils/Details';
import Image from 'next/image';
import Animation from '../Animation';

const Sectionone = () => {
  const obj = {
    one: 'Taxes: Personal, Business, and Corporate',
    two: 'Knowledgeable Local Sales Tax, VAT',
    three: 'Legally Required Corporate Documentation',
  };

  return (
    <>
      <section>
        <div className="sec1 flexbx">
          <div className="col1 sec1-col">
            <div className="imgBx">
              <Animation>
              <Image
                width={500}
                height={350}
                src="/images/taxes.jpg"
                alt="Taxes"
              />
              </Animation>
            </div>
          </div>
          <div className="col2">
            <div className="exp-title-bx">
              <Animation>
              <Title title="COMPLIANCE" caption="Our Small Business Services" />
              <Details obj={obj} />
              </Animation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Sectionone;
