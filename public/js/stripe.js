/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Redirect directly using the Stripe session URL
    window.location.replace(session.data.session.url);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
