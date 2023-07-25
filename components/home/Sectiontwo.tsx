import Image from 'next/image';
import Details from '../utils/Details';
import Title from '../utils/Title';
import Animation from '../Animation';

const Sectiontwo = () => {
  const obj = {
    one: 'Bookkeeping: manage daily transactions',
    two: 'Payroll: Management of payroll and taxes',
    three: 'Planning: Reporting and advice to support growth',
    four: 'Payables & Receivables: Management of supplier and customer invoices',
    five: 'Company Formation: Forming a new company ',
    six: 'Business Plan: Writing a professional Business Plan',
  };

  return (
    <>
      <section>
        <div className="sec2 flexbx">
          <div className="col2">
            <div className="exp-title-bx2">
              <div className="expdt2">
                <Animation>
                  <Title
                    title="Management"
                    caption="Our Small Business Services"
                  />
                  <Details obj={obj} />
                </Animation>
              </div>
            </div>
          </div>

          <div className="col1 sec2-col">
            <Animation>
              <Image
                width={500}
                height={400}
                src="/images/management.jpg"
                alt="Taxes"
              />
            </Animation>
          </div>
        </div>
      </section>
    </>
  );
};
export default Sectiontwo;
