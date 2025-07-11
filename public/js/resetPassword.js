/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const initResetPassword = () => {
  const resetForm = document.querySelector('.form--reset');
  const showPasswordCheckbox = document.getElementById('showPassword');

  if (resetForm) {
    resetForm.addEventListener('submit', async e => {
      e.preventDefault();
      const password = document.getElementById('password').value;
      const passwordConfirm = document.getElementById('passwordConfirm').value;
      
      // get the token from the current URL
      const token = window.location.pathname.split('/')[2];

      try {
        const res = await axios({
          method: 'POST',
          url: `/api/v1/users/resetPassword/${token}`,
          data: { password, passwordConfirm }
        });

        if (res.data.status === 'success') {
          showAlert('success', 'Password successfully reset!');
          window.setTimeout(() => {
            location.assign('/'); // or redirect wherever you like
          }, 1500);
        }
      } catch (err) {
        showAlert('error', err.response.data.message);
      }
    });
  }

  if (showPasswordCheckbox) {
    showPasswordCheckbox.addEventListener('change', e => {
      const password = document.getElementById('password');
      const passwordConfirm = document.getElementById('passwordConfirm');
      const type = e.target.checked ? 'text' : 'password';
      if (password) password.type = type;
      if (passwordConfirm) passwordConfirm.type = type;
    });
  }
};
