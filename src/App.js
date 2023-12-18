// App.js
import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import './App.css';

const App = () => {
  const [quoteData, setQuoteData] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  const handleData = (data) => {
    setSelectedOption(data);
  };

  const fetchData = () => {
    const normalizedCategory = selectedOption.trim().toLowerCase();
    const apiUrl =
      categories.includes(normalizedCategory)
        ? `https://api.api-ninjas.com/v1/quotes?category=${normalizedCategory}`
        : 'https://api.api-ninjas.com/v1/quotes';
    const apiKey = 'vvBq2s9HqMkoDLa2vkp0jg==eUhiy9FYL9smUkga';

    fetch(apiUrl, {
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setQuoteData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, [selectedOption]);

  const categories = [
    'age',
    'alone',
    'amazing',
    'anger',
    'architecture',
    'art',
    'attitude',
    'beauty',
    'best',
    'birthday',
    'business',
    'car',
    'change',
    'communication',
    'computers',
    'cool',
    'courage',
    'dad',
    'dating',
    'death',
    'design',
    'dreams',
    'education',
    'environmental',
    'equality',
    'experience',
    'failure',
    'faith',
    'family',
    'famous',
    'fear',
    'fitness',
    'food',
    'forgiveness',
    'freedom',
    'friendship',
    'funny',
    'future',
    'god',
    'good',
    'government',
    'graduation',
    'great',
    'happiness',
    'health',
    'history',
    'home',
    'hope',
    'humor',
    'imagination',
    'inspirational',
    'intelligence',
    'jealousy',
    'knowledge',
    'leadership',
    'learning',
    'legal',
    'life',
    'love',
    'marriage',
    'medical',
    'men',
    'mom',
    'money',
    'morning',
    'movies',
    'success',
  ].map((category) => category.toLowerCase());

  return (
    <>
      <Navbar sentData={handleData} />
      <div className='quote'>
        {quoteData &&
          quoteData.map((q, index) => (
            <div key={index}>
              <p className='text'>
                <span className='qt'>"</span>
                {q.quote}
                <span className='qt'>"</span>
              </p>
              <p className='author'>
                <img src='author-sign.svg' alt='' /> {q.author}
              </p>
            </div>
          ))}
      </div>
      <button onClick={fetchData} className='btn'>
        New quote
      </button>
    </>
  );
};

export default App;
