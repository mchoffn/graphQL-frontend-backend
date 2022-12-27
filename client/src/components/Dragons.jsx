import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import DragonCard from './DragonCard';
import { GET_DRAGONS } from '../queries/dragonQueries';

export default function Dragons() {
  const { loading, error, data } = useQuery(GET_DRAGONS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {data.dragons.length > 0 ? (
        <div className='row mt-4'>
          {data.dragons.map((dragon) => (
            <DragonCard key={dragon.id} dragon={dragon} />
          ))}
        </div>
      ) : (
        <p>No Dragons</p>
      )}
    </>
  );
}
