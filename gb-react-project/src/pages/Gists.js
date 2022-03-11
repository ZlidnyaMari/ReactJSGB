import { CircularProgress } from "@mui/material";
import { useCallback, useEffect } from "react";
import { getAllGists } from "../store/gists/actions";
import { useDispatch, useSelector } from 'react-redux';


const Gists = () => { 
    const { gists, request, error } = useSelector(state => state.gists);
    const dispatch = useDispatch();

    const requestGists = () => {
      dispatch(getAllGists()) 
    }; 

    useEffect( () => {
       requestGists();
    }, [])

const renderGist = useCallback( 
    (gist) => <li>{gist.description || 'No description'}</li>, 
     []); 

     if(request) {
         return <CircularProgress />
     };


    return (
            <div>
                {error && <div>
                    <h3>Error</h3>
                    <button onClick={requestGists}>Retry</button>        
                </div>}

                <ul>{gists.map(renderGist)}</ul>
            </div>
    ); 
};

export default Gists; 