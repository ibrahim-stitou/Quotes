// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const categories = [
  'age', 'alone', 'amazing', 'anger', 'architecture', 'art', 'attitude', 'beauty', 'best', 'birthday',
  'business', 'car', 'change', 'communication', 'computers', 'cool', 'courage', 'dad', 'dating', 'death',
  'design', 'dreams', 'education', 'environmental', 'equality', 'experience', 'failure', 'faith', 'family',
  'famous', 'fear', 'fitness', 'food', 'forgiveness', 'freedom', 'friendship', 'funny', 'future', 'god', 'good',
  'government', 'graduation', 'great', 'happiness', 'health', 'history', 'home', 'hope', 'humor', 'imagination',
  'inspirational', 'intelligence', 'jealousy', 'knowledge', 'leadership', 'learning', 'legal', 'life', 'love',
  'marriage', 'medical', 'men', 'mom', 'money', 'morning', 'movies', 'success'
].map(category => category.toLowerCase());

const Navbar = ({ sentData }) => {
  const [category, setCategory] = useState('');

  const handleChange = () => {
    sentData(category);
  };

  return (
    <div>
      <nav className="nav">
        <a href="#" className="nav_brand">DailyQuotes</a>
        <ul className='nav_menu'>
          <li className="nav_item"><a href="#" className="nav_link">category :</a></li>
          <li className='input'>
            <input
              type='text'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder='Category'
              className='input1'
              list="categoryList"
            />
            <datalist id="categoryList">
              {categories.map((cat, index) => (
                <option key={index} value={cat} />
              ))}
            </datalist>
            <button onClick={handleChange} className='btn11'>Done</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
