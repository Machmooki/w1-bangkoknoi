"use client";

import { FormShell } from "./FormShell";

export function EnquiryForm({ type = "contact" }: { type?: string }) {
  return (
    <FormShell type={type} submitLabel="Send Enquiry →">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="first_name">First Name *</label>
          <input id="first_name" type="text" name="first_name" placeholder="Your first name" required />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name *</label>
          <input id="last_name" type="text" name="last_name" placeholder="Your last name" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input id="email" type="email" name="email" placeholder="your@email.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone / WhatsApp</label>
          <input id="phone" type="tel" name="phone" placeholder="+66 or international number" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="enquiry_type">Nature of Enquiry *</label>
        <select id="enquiry_type" name="enquiry_type" required defaultValue="">
          <option value="">Please select</option>
          <option>Room / Accommodation Enquiry</option>
          <option>Dining &amp; Restaurant Reservation</option>
          <option>Wellness &amp; Spa Treatment</option>
          <option>Wedding Enquiry</option>
          <option>Corporate Event or Meeting</option>
          <option>Boat Trip &amp; Experiences</option>
          <option>Group Booking</option>
          <option>Press &amp; Media</option>
          <option>Careers</option>
          <option>General Question</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact_method">Preferred Contact Method</label>
          <select id="contact_method" name="contact_method" defaultValue="Email">
            <option>Email</option>
            <option>Phone Call</option>
            <option>WhatsApp</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="referral_source">How did you hear about us?</label>
          <select id="referral_source" name="referral_source" defaultValue="">
            <option value="">Please select</option>
            <option>Google Search</option>
            <option>Instagram / Facebook</option>
            <option>TripAdvisor</option>
            <option>Booking.com / Agoda</option>
            <option>Friend or Family</option>
            <option>Travel Agent</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Your Message *</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us how we can help you. The more detail you share, the better we can assist you."
          required
        />
      </div>
    </FormShell>
  );
}
