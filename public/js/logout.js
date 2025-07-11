import axios from 'axios';
import { showAlert } from './alerts';

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Logged out successfully!');   // ✅ immediately show alert
      window.setTimeout(() => {
        location.assign('/');  // ✅ then redirect to home
      }, 1500);  // after 1.5 seconds (same timing as login)
    }
  } catch (err) {
    console.log(err);
    showAlert('error', 'Error logging out! Try again.');
  }
};
