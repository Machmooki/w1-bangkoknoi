"use client";

import { FormShell } from "./FormShell";

export function TreatmentForm() {
  return (
    <FormShell type="treatment" submitLabel="Request Booking →">
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
            <option>9:00 AM</option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>
            <option>12:00 PM</option>
            <option>1:00 PM</option>
            <option>2:00 PM</option>
            <option>3:00 PM</option>
            <option>4:00 PM</option>
            <option>5:00 PM</option>
            <option>6:00 PM</option>
            <option>7:00 PM</option>
          </select>
        </div>
      </div>
      <div className="section-divider">Treatment Selection</div>
      <div className="form-group">
        <label htmlFor="treatment_type">Treatment Type *</label>
        <select id="treatment_type" name="treatment_type" required defaultValue="">
          <option value="">Please select</option>
          <option>Thai Traditional Massage (60 min)</option>
          <option>Thai Traditional Massage (90 min)</option>
          <option>Aromatherapy Massage (60 min)</option>
          <option>Aromatherapy Massage (90 min)</option>
          <option>Hot Stone Therapy (90 min)</option>
          <option>Royal Thai Herbal Compress (90 min)</option>
          <option>Deep Tissue Massage (60 min)</option>
          <option>Couples Massage (90 min)</option>
          <option>Canal-Side Facial (60 min)</option>
          <option>W1 Signature Ritual (120 min)</option>
          <option>Not sure — please advise</option>
        </select>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <select id="guests" name="guests" defaultValue="1">
            <option value="1">1 person</option>
            <option value="2">2 people (couples)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="therapist">Therapist Preference</label>
          <select id="therapist" name="therapist" defaultValue="No preference">
            <option value="No preference">No preference</option>
            <option>Female therapist</option>
            <option>Male therapist</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="pressure">Pressure Preference</label>
        <select id="pressure" name="pressure" defaultValue="Medium">
          <option value="Medium">Medium (standard)</option>
          <option value="Light">Light</option>
          <option value="Firm">Firm</option>
          <option value="Very firm">Very firm</option>
        </select>
      </div>
      <div className="section-divider">Health &amp; Wellbeing</div>
      <div className="form-group">
        <label htmlFor="hotel_guest">Are you a hotel guest?</label>
        <select id="hotel_guest" name="hotel_guest" defaultValue="Yes">
          <option value="Yes">Yes — staying at the hotel</option>
          <option value="No">No — day visitor</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="health_notes">Health Conditions or Contraindications</label>
        <textarea
          id="health_notes"
          name="health_notes"
          placeholder="Please share any relevant health conditions, injuries, allergies, or areas to avoid (e.g. lower back pain, pregnancy, high blood pressure)"
        />
      </div>
      <div className="form-group">
        <label htmlFor="special_requests">Special Requests</label>
        <textarea
          id="special_requests"
          name="special_requests"
          placeholder="In-villa treatment, specific scent preferences, post-treatment requests, or any other notes"
        />
      </div>
    </FormShell>
  );
}
