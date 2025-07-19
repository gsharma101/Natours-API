import axios from 'axios';
import { showAlert } from './alerts';

export const updateSettings = async (data, type) => {
  try {
    showAlert('success', 'Uploading...'); // 👈 Show initial "Uploading..."

    const url =
      type === 'password'
        ? '/api/v1/users/updateMyPassword'
        : '/api/v1/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    // 👇 Artificial 2s delay before final message
    setTimeout(() => {
      if (res.data.status === 'success') {
        showAlert('success', `${type.toUpperCase()} updated successfully!`);
        
        // Reload only if data was updated (not password)
        if (type !== 'password') {
          window.setTimeout(() => {
            location.reload();
          }, 1000);
        }
      }
    }, 5000); // 2 second artificial delay
  } catch (err) {
    const message =
      err.response?.data?.message || 'Something went wrong!';
    showAlert('error', message);
  }
};
