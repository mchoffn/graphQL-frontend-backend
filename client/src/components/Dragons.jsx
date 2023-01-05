import * as React from 'react';
import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import DragonCard from './DragonCard';
import { GET_DRAGONS } from '../queries/dragonQueries';

const Dragons = ({search}) => {
  const { loading, error, data } = useQuery(GET_DRAGONS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>    
      {data.dragons.length > 0 ? (
          <div value={data} className='row dragonCardContainer d-flex justify-content-around'>
            {data.dragons.filter((dragon) => {
              return search.toLocaleLowerCase() === ''
              ? dragon
              : dragon.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                          }).map((dragon) => (
              <DragonCard key={dragon.id} dragon={dragon} />
            ))}
          </div>
      ) : (
        <p>No Dragons</p>
      )}
    </>
  );
};

export { Dragons};
