import fish from './assets/Icons/Fish.png';
import wood from './assets/Icons/Wood.png';
import iron from './assets/Icons/Iron.png';
import scardian from './assets/Dragons_image/scardian.png';
import gatheringTime from './assets/Icons/Time.png';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

export default function DragonCard({ dragon }) {
    const navigate = useNavigate();
  
    function viewDragon() {
      navigate(`/dragons/${dragon.id}`);
    }

  return (
    <Card className='col-md-4 mt-3 dragonCardIndividual' onClick={viewDragon}>
      <CardContent>
        <Typography>
          <img className='dragonImage' src={scardian} width={120} height={120} alt="" />
        </Typography>
        <Typography variant="h5 dragonName">
          {dragon.name}
        </Typography>
        <Typography className=''>
          <img src={fish} alt="" className="dragonStatsIcon" />
          {dragon.fish}
        </Typography>
        <Typography>
          <img src={wood} alt="" className="dragonStatsIcon" />
          {dragon.wood}
        </Typography>
        <Typography>
          <img src={iron} alt="" className="dragonStatsIcon" />
          {dragon.iron}
        </Typography>
        <Typography>
          <img src={gatheringTime} alt="" className="dragonStatsIcon" />
          {dragon.gatheringTime}
        </Typography>
      </CardContent>
    </Card>


    /* <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{dragon.name}</h5>
            <a className="btn btn-light" href={`/dragons/${dragon.id}`}>View</a>

          </div>
          <div className="dragonCardContent d-flex flex-column">
            <div className="rowStats">
              <img src={fish} alt="" className="dragonStatsIcon" />
              <p className="card-text">{dragon.fish}</p>
            </div>
            <div className="rowStats">
              <img src={wood} alt="" className="dragonStatsIcon" />
              <p className="card-text">{dragon.wood}</p>
            </div>
            <div className="rowStats">
              <img src={iron} alt="" className="dragonStatsIcon" />
              <p className="card-text">{dragon.iron}</p>
            </div>
            <div className="rowStats">
              <img src={gatheringTime} alt="" className="dragonStatsIcon" />
              <p className="card-text">{dragon.gatheringTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div> */
  )
}