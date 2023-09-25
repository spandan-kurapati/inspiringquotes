// In a separate file, e.g., quoteUtils.js
const quotes = []; // An array to store quotes

export const addQuote = (quoteData) => {
  quotes.push(quoteData);
};

export const getAllQuotes = () => {
  return [...quotes]; // Return a copy of the quotes array
};
