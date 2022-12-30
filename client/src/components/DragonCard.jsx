import fish from './assets/Icons/Fish.png'
import wood from './assets/Icons/Wood.png'
import iron from './assets/Icons/Iron.png'
import gatheringTime from './assets/Icons/Time.png'

export default function DragonCard({ dragon }) {
  return (
    <div className="col-md-4">
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
    </div>
  )
}