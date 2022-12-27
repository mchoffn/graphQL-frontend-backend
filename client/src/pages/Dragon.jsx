import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useQuery } from '@apollo/client';
import { GET_DRAGON } from '../queries/dragonQueries';
import DeleteDragonButton from '../components/DeleteDragonButton';

export default function Dragon() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_DRAGON, { variables: { id } });
    
    if (loading) return <Spinner />;
    if (error) return <p>Something Went Wrong</p>;
    
    return (
        <>
        {!loading && !error && (
            <div className='mx-auto w-75 card p-5'>
            <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
                Back
            </Link>
    
            <h1>{data.dragon.name}</h1>
            <p>{data.dragon.fish}</p>
            <p>{data.dragon.wood}</p>
            <p>{data.dragon.iron}</p>
            <p>{data.dragon.gatheringTime}</p>
    
    
            <DeleteDragonButton dragonId={data.dragon.id} /> 
            </div>
        )}
        </>
    );
    }