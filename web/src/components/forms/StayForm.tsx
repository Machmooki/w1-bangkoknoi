"use client";

import { FormShell } from "./FormShell";

export function StayForm() {
  return (
    <FormShell type="stay" submitLabel="Send Enquiry →">
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
          <label htmlFor="phone">Phone / WhatsApp *</label>
          <input id="phone" type="tel" name="phone" placeholder="+66 or international number" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="nationality">Nationality</label>
          <input id="nationality" type="text" name="nationality" placeholder="e.g. Thai, British, Australian" />
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
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="check_in">Check-In Date *</label>
          <input id="check_in" type="date" name="check_in" required />
        </div>
        <div className="form-group">
          <label htmlFor="check_out">Check-Out Date *</label>
          <input id="check_out" type="date" name="check_out" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="adults">Number of Adults *</label>
          <select id="adults" name="adults" required defaultValue="">
            <option value="">Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="children">Number of Children</label>
          <select id="children" name="children" defaultValue="0">
            <option value="0">None</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="room_type">Room Type Preference</label>
        <select id="room_type" name="room_type" defaultValue="">
          <option value="">No preference / Please advise</option>
          <option>Signature Garden Queen</option>
          <option>Signature King with Whirlpool</option>
          <option>Signature Queen with Steam/Sauna</option>
          <option>Deluxe King / Twin</option>
          <option>Deluxe King Suite</option>
          <option>King Pool Suite</option>
          <option>King WhirlPool Villa</option>
          <option>Wellness Villa</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="occasion">Special Occasion?</label>
        <select id="occasion" name="occasion" defaultValue="None">
          <option value="None">None</option>
          <option>Honeymoon</option>
          <option>Anniversary</option>
          <option>Birthday</option>
          <option>Business Trip</option>
          <option>Family Holiday</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="special_requests">Special Requests or Notes</label>
        <textarea
          id="special_requests"
          name="special_requests"
          placeholder="Dietary needs, accessibility requirements, bed configuration preferences, early check-in, late check-out, etc."
        />
      </div>
    </FormShell>
  );
}
