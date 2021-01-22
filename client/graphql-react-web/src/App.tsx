import React, { FC } from 'react';
import { useQuery, gql } from '@apollo/client';

const BOOKS = gql`
  query Books {
    books {
      title
      author
    }
  }
`;

const App: FC = () => {
  const { loading, data, error } = useQuery<{
    books: { title: string; author: string }[];
  }>(BOOKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>No data</p>;
  return (
    <div>
      {data.books.map((book) => (
        <div key={`${book.title}-${book.author}`}>
          {book.title} / {book.author}
        </div>
      ))}
    </div>
  );
};

export default App;
