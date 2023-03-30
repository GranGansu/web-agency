import axios from 'axios';
import { useEffect, useState } from 'react';

export default function News() {
  const [query, setQuery] = useState('');
  const options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
    params: {
      q: query,
      pageNumber: '1',
      pageSize: '10',
      autoCorrect: 'true',
      fromPublishedDate: 'null',
      toPublishedDate: 'null',
    },
    headers: {
      /* 'X-RapidAPI-Key': '5b28c1b7e6mshd05f90897d844f7p1ddd63jsnba9258ab78b4', */
      'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
    },
  };
  const [resultados, setResultados] = useState([]);
  const handleX = () => {
    setQuery('');
  };
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      axios
        .request(options)
        .then((response) => {
          setResultados(response.data.value);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 3000);
    return () => clearTimeout(delaySearch);
  }, [query]);

  return (
    <div className='border p-4 m-auto rounded'>
      <form className='flex gap-y-2'>
        <div className='flex gap-x-2 items-center'>
          <div className='flex justify-end relative items-center'>
            <input
              onFocus={() => {
                setQuery((prev) => prev === '' && ' ');
              }}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={query}
              className='p-2 pl-3 shadow border-2 rounded-full bg-gray-700 text-white placeholder-gray-200 text-sm'
              type='text'
              placeholder='Noticias'></input>
            <div
              onClick={handleX}
              className='bg-gray-600 text-gray-400 py hover:cursor-pointer px-2 absolute border-transparent border-2 hover:border-white 
-translate-x-1 rounded-full hover:text-white'>
              x
            </div>
          </div>
        </div>
      </form>
      <h1>
        Noticias sobre <b>{query}</b>:
      </h1>
      <div>
        <ul>
          {resultados.map((element, key) => {
            return (
              <li className='pb-2' key={key}>
                {element.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
