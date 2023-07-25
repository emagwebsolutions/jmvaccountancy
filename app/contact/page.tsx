'use client';

import Animation from '@/components/Animation';
import Universal from '@/components/Universal';

const Contacts = () => {
  return (
    <Universal>
      <div className="contactWrapper">

        <Animation>
          <div className="contactHeader">
            <h1>CONTACT US</h1>
          </div>
        </Animation>

        <div className="contactInner">


        <Animation>
          <div className="contactDetails">
            <div className="contactDetBox">
              <h1>JMV ACCOUNTANCY</h1>
              <h1>SOLUTIONS LTD.</h1>
              <h2>59 Livingstone Road</h2>
              <h2>Thornton Heath</h2>
              <h2>CR7 8JX</h2>
              <h2>
                {' '}
                <i className="fa fa-phone fa-lg"></i> 07951 039 836{' '}
              </h2>
            </div>
          </div>
          </Animation>

          <Animation>
          <div className="contactForm">
            <div className="form-box">
              <form>
                <div className="email-title">SEND EMAIL</div>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input type="email" />
                </div>

                <br />
                <div className="form-group">
                  <label htmlFor="">Subject</label>
                  <input type="text" />
                </div>

                <br />
                <div className="form-group">
                  <textarea></textarea>
                </div>

                <br />
                <button>Send</button>
              </form>
            </div>
          </div>
          </Animation>


        </div>
      </div>
    </Universal>
  );
};

export default Contacts;
