import data from '../data';

const booksResolvers = {
  Query: {
    books: () => data.books,
  },
};

export default [booksResolvers];
