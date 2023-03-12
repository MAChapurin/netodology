import React, {useState} from 'react';
import { VideoList } from './components/VideoList/VideoList';

export default function App() {
  const [list, setList] = useState([
      {
          url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2023-03-12 03:24:00'
      },
      {
          url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2023-01-03 12:10:00'
      },
      {
          url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2023-03-11 23:16:00'
      },
      {
          url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2023-03-11 18:10:00'
      },
      {
          url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2023-03-11 16:17:00'
      },
      {
          url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2023-01-12 05:24:00'
      },
  ]);

  return (
      <VideoList list={list} />
  );
}