import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GET_DRAGONS } from "../queries/dragonQueries";
import { useMutation } from "@apollo/client";
import {DELETE_DRAGON} from "../mutations/dragonMutations";


export default function DeleteDragonButton({dragonId}) {

  const navigate = useNavigate();

  const [deleteDragon] = useMutation(DELETE_DRAGON, {
    variables: {id: dragonId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_DRAGONS}],
  });


  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={deleteDragon}>
        <FaTrash className="icon" /> Delete Dragon
      </button>
    </div>
  )
}