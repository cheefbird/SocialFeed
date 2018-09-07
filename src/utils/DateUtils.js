// Format Date string to readable string from ISO
/**
 * @description Formats ISO date string to human readable text.
 * @param {string} date The ISO date string to be formatted.
 * @returns {string} Human-readable date text.
 */
export const formatDate = date => {
  const dateObject = new Date(date);
  return dateObject.toDateString();
};
