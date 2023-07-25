const Appointment = () => {
  return (
    <>
      <div className="apmnt-title">
        <span>
          GET AN <strong>APPOINTMENT</strong>
        </span>
      </div>

      <div className="apmnt-body">
        <div className="fgrp">
          <label>HOW CAN WE HELP?</label>
          <br />
          <select>
            <option>I would like to have a one on one meeting with you</option>
          </select>
        </div>

        <div className="fgrp">
          <label>Your Name*</label>
          <br />
          <input type="text" />
        </div>

        <div className="fgrp">
          <label>Your Phone Number*</label>
          <br />
          <input type="text" />
        </div>

        <div className="fgrp">
          <label>Appointment Date *</label>
          <br />
          <input type="date" />
        </div>

        <div className="fgrp">
          <label>Email</label>
          <br />
          <input type="email" />
        </div>

        <button className="btn">BOOK NOW</button>
      </div>
    </>
  );
};

export default Appointment;
