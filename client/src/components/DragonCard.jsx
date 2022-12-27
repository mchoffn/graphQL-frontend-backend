export default function DragonCard({ dragon }) {
  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{dragon.name}</h5>

            <a className="btn btn-light" href={`/dragons/${dragon.id}`}>View</a>
          </div>
        </div>
      </div>
    </div>
  )
}