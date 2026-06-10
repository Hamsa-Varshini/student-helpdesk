const { faqs } = require('../data/mockDb');

const getAllFaqs = async () => {
  // In a real app, you would fetch this from a database
  return faqs;
};

module.exports = { getAllFaqs };
