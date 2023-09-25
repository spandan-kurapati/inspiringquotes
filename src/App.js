import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
// import AllQuotes from './pages/AllQuotes';
// import NewQuote from './pages/NewQuote';
// import QuoteDetails from './pages/QuoteDetails';
import { initializeApp } from 'firebase/app'; 
import { getDatabase, ref, push, onValue, off } from 'firebase/database'; 

const firebaseConfig = {
  databaseURL: 'https://quotes-ad104-default-rtdb.firebaseio.com'
};

const firebaseApp = initializeApp(firebaseConfig); 

function App() {
  

const NewQuote = React.lazy(()=>import('./pages/NewQuote'))
const AllQuotes = React.lazy(()=>import('./pages/AllQuotes'))
const QuoteDetails = React.lazy(()=>import('./pages/QuoteDetails'))
  const [quotes, setQuotes] = useState([]);

  const addQuoteHandler = (newQuote) => {
    // Stores the new quote in Firebase
    const db = getDatabase();
    const quotesRef = ref(db, 'quotes');
    push(quotesRef, newQuote);
  };

  useEffect(() => {
    // Fetches data from Firebase
    const db = getDatabase();
    const quotesRef = ref(db, 'quotes');

    const fetchData = () => {
      onValue(quotesRef, (snapshot) => {
        const fetchedQuotes = [];

        snapshot.forEach((childSnapshot) => {
          const quoteData = childSnapshot.val();
          fetchedQuotes.push(quoteData);
        });

        setQuotes(fetchedQuotes);
      });
    };

    fetchData();

    return () => {
      off(quotesRef, 'value', fetchData);
    };
  }, []);

  return (
    <Layout>
      <Suspense fallback = {<p>loading....</p>}>

      <Routes>
        <Route path="/" element={<AllQuotes quotes={quotes} />} />
        <Route path="/newquote" element={<NewQuote onAddQuote={addQuoteHandler} />} />
        <Route path="/quotedetails/:quoteId" element={<QuoteDetails quotes={quotes} />} />
      </Routes>
      </Suspense>
    </Layout>

  );
}

export default App;
