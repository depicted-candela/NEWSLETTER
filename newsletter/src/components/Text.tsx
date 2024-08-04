import React from 'react';

interface TextProps {
  content: string;
}

const Text: React.FC<TextProps> = ({ content }) => {
  return <p>{content}</p>;
};

export default Text;
