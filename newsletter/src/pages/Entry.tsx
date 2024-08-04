import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Title from '../components/Title';
import Text from '../components/Text';
import Image from '../components/Image';
import List from '../components/List';

interface EntryData {
  title: string;
  subtitle: string;
  text: string;
  imageUrl: string;
  listItems: string[];
  ordered: boolean;
}

const Entry: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<EntryData | null>(null);

  useEffect(() => {
    axios.get(`/api/entries/${id}`).then(response => setData(response.data));
  }, [id]);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Title text={data.title} />
      <Text content={data.subtitle} />
      <Text content={data.text} />
      <Image src={data.imageUrl} alt={data.title} />
      <List items={data.listItems} ordered={data.ordered} />
    </div>
  );
};

export default Entry;
