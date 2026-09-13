"use client";

import { FormShell } from "./FormShell";

export function TableForm() {
  return (
    <FormShell type="table" submitLabel="Request Reservation →">
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
          <label htmlFor="date">Preferred Date *</label>
          <input id="date" type="date" name="date" required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Preferred Time *</label>
          <select id="time" name="time" required defaultValue="">
            <option value="">Select time</option>
            <option>Lunch · 11:30 AM</option>
            <option>Lunch · 12:00 PM</option>
            <option>Lunch · 12:30 PM</option>
            <option>Lunch · 1:00 PM</option>
            <option>Dinner · 6:00 PM</option>
            <option>Dinner · 6:30 PM</option>
            <option>Dinner · 7:00 PM</option>
            <option>Dinner · 7:30 PM</option>
            <option>Dinner · 8:00 PM</option>
            <option>Dinner · 8:30 PM</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="guests">Number of Guests *</label>
          <select id="guests" name="guests" required defaultValue="">
            <option value="">Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8+</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="venue">Dining Venue</label>
          <select id="venue" name="venue" defaultValue="No preference">
            <option value="No preference">No preference</option>
            <option>Thai Boran Restaurant</option>
            <option>W1 Café</option>
            <option>Private Dining Room</option>
            <option>Canal Terrace</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="occasion">Special Occasion?</label>
        <select id="occasion" name="occasion" defaultValue="None">
          <option value="None">None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Honeymoon</option>
          <option>Business Dinner</option>
          <option>Family Gathering</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="dietary">Dietary Requirements</label>
        <input id="dietary" type="text" name="dietary" placeholder="e.g. vegetarian, gluten-free, nut allergy" />
      </div>
      <div className="form-group">
        <label htmlFor="special_requests">Special Requests</label>
        <textarea
          id="special_requests"
          name="special_requests"
          placeholder="Preferred seating, decorations, menu requests, or any other notes for the team"
        />
      </div>
    </FormShell>
  );
}
