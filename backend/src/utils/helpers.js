module.exports = {
  formatDate: (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  },

  generateRandomId: () => {
    return Math.random().toString(36).substr(2, 9);
  },

  validateEmail: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  },

  calculateBidDuration: (startTime, endTime) => {
    const duration = new Date(endTime) - new Date(startTime);
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);
    return `${hours}h:${minutes}m:${seconds}s`;
  }
};