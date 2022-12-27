import { useState } from 'react';

const SearchBar = ({dragons, setSearchDragons}) => {
    const [search, setSearch] = useState('');

    const onChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        if(search !== '') {
            const searchDragons = dragons.filter(dragon => dragon.name.toLowerCase().includes(search.toLowerCase()) || dragon.fish.toLowerCase().includes(search.toLowerCase()) || dragon.wood.toLowerCase().includes(search.toLowerCase()) || dragon.iron.toLowerCase().includes(search.toLowerCase()) || dragon.gatheringTime.toLowerCase().includes(search.toLowerCase()));
            setSearchDragons(searchDragons);
        } else {
            setSearchDragons(dragons);
        }
    }

    return (
        <div className="align-items-center col-md-4">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Search dragons" 
                value={search}
                onChange={onChange}
                
            />
            
        </div>
    )
}

export default SearchBar