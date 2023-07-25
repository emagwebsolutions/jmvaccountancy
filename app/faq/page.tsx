'use client';

import Animation from '@/components/Animation';
import Universal from '@/components/Universal';
import Image from 'next/image';

const Faq = () => {
  return (
    <Universal>
      <div className="faq-wrapper">
   
          <h1 className="faq-title">
        
            Frequently Asked Questions
       
          </h1>
 

        <div className="faq-bx1">
          <div className="faq-row">
            <div className="faq-col">
              <Animation>
                <Image
                  width={500}
                  height={400}
                  src="/images/budget.jpg"
                  alt=""
                />
              </Animation>
            </div>
            <div className="faq-col">
              <Animation>
                <h4 className="font-size-md">
                  When should I contact an accountant?
                </h4>
                <p className="para-text">
                  As soon as you start to think about your business, an
                  accountant can help you take the next steps. We can discuss
                  your business&apos;s organization, tax purposes and
                  operations, along with target pricing and profit margins.
                </p>
              </Animation>
            </div>
          </div>
        </div>

        <div className="faq-bx2">
          <div className="faq-row">
            <div className="faq-col">
              <Animation>
                <h4 className="font-size-md">
                  What are my options for raising money?
                </h4>
                <p className="para-text">
                  Get some impartial advice from an accountant before you
                  consult the bank. A bank will want to see a strong business
                  plan and organized records. Let us help you get ready for your
                  business&apos;s next step!
                </p>
              </Animation>
            </div>
            <div className="faq-col">
              <Animation>
                <Image width={500} height={400} src="/images/pen.jpg" alt="" />
              </Animation>
            </div>
          </div>
        </div>

        <div className="faq-bx3">
          <div className="faq-row">
            <div className="faq-col">
              <Animation>
                <Image width={500} height={400} src="/images/calc.jpg" alt="" />
              </Animation>
            </div>
            <div className="faq-col">
              <Animation>
                <h4 className="font-size-md">
                  How can I know which accountant is right for me?
                </h4>
                <p className="para-text">
                  Does your accountant return your calls? Do you feel
                  comfortable asking them a question? Do you feel heard? With
                  the right accountant, the answers should be a resounding Yes!
                </p>
              </Animation>
            </div>
          </div>
        </div>
      </div>
    </Universal>
  );
};

export default Faq;
