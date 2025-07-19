/* eslint-disable */
import { displayMap } from './mapbox';
import { login } from './login';
import { logout } from './logout';
import { updateSettings } from './updateSettings';
import { forgotPassword } from './forgotPassword';
import { initResetPassword } from './resetPassword';

// DOM ELEMENTS
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const forgotForm = document.querySelector('.form--forgot');
const photoInput = document.getElementById('photo');
const photoPreview = document.getElementById('photoPreview');

// DELEGATION

// Display map
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

// Login form
if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

// Logout button
if (logOutBtn) logOutBtn.addEventListener('click', logout);

// Update user data (name, email, photo)
if (userDataForm)
  if (userDataForm)
    userDataForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const saveBtn = document.querySelector('.btn--save-settings');
      saveBtn.textContent = 'Updating...'; // Show loading state

      const form = new FormData();
      form.append('name', document.getElementById('name').value);
      form.append('email', document.getElementById('email').value);
      const photoInput = document.getElementById('photo');
      if (photoInput.files.length > 0) {
        form.append('photo', photoInput.files[0]);
      }

      updateSettings(form, 'data').then(() => {
        saveBtn.textContent = 'Save settings'; // Reset
      });
    });

// Password update
if (userPasswordForm)
  userPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;

    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password',
    );

    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });

// Forgot password
if (forgotForm)
  forgotForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    forgotPassword(email);
  });

// Initialize reset password
initResetPassword();

// Show image preview on photo change
if (photoInput && photoPreview) {
  photoInput.addEventListener('change', function () {
    const file = photoInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        photoPreview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}
