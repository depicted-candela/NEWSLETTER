import React from 'react';

interface ListProps {
  items: string[];
  ordered: boolean;
}

const List: React.FC<ListProps> = ({ items, ordered }) => {
  return ordered ? (
    <ol>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  ) : (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
