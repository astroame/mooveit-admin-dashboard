import React from "react";

import Accordion from "../../shared/Accordion";

const BookingDetails = ({bookingDuration,bookingNotice}) => {
  

  return (
    <Accordion title="booking details">
      <div className="space-y-6">
        <div>
          <h3 className="mb-3">Booking Duration</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
            {bookingDuration}
          </div>
        </div>

        <div>
          <h3 className="mb-3">Notice before a customer arrives</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
            {bookingNotice}
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default BookingDetails;