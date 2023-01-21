import { useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sendAPI from '../../SendAPI';
import { userJWT, userModeState } from "../../JWT";
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

// Import CSS
import './TrackModal.css';
import '../TrackCard/TrackCard.css';

type Props = {
  track: Track; 
}

interface Track {
  createdAt: string;
  id: string;
  likeCount: number;
  midi: string;
  public: boolean;
  thumbnail: string;
  title: string;
  userID: string;
  fullname: string;
}

const TrackModal: React.FC<Props> = ({track}) => {
  const navigate = useNavigate();
  const jwt = useRecoilValue(userJWT);
  const user = useRecoilState(userModeState);

  const [editing, setEditing] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  
  const [trackName, setTrackName] = useState(track.title);
  const [visibility, setVisibility] = useState(track.public);
  const [thumbnail, setThumbnail] = useState(track.thumbnail);

  function updateTrack () {

    if (jwt == null || user == null) navigate("/login");

    let updatedTrack = {
      id: track.id,
      title: trackName,
      midi: track.midi,
      thumbnail: thumbnail,
      likeCount: track.likeCount,
      public: track.public,
      token: jwt
    }
    
    sendAPI("put", "/posts/updatePost", updatedTrack).then((res) => {
      if (res.status == 200) {
        setErrMsg("");
        setSuccessMsg("Track updated")
      }
      else setErrMsg("Could not save post.");

    })

    setEditing(false);

  }


  return (
    <>
      <div>
        <div className='modal-background'>
          <Modal.Header className='modal-container0' closeButton>
          </Modal.Header>
          <Modal.Body className='modal-container1'>
            <div id='modal-track-cover-div'>
              <img src={track.thumbnail} className="card-img-top modal-track-cover" id="card-img-ID" alt="..."/>
            </div>
            <div id='modal-track-text-div'>
              {!visibility && <h6 id="hidden-track-text">
                <FontAwesomeIcon className='modal-track-icons' icon={["fas", "eye-slash"]} />
                hidden track
              </h6>}
              {!editing && <h1 id='track-title-text'>{track.title}</h1>}
              {editing && <input type="text" id='track-title-text' defaultValue={trackName}></input>}
              
              <h6 id="track-author-text">{track.fullname}</h6>
              <button type="button" className="btn btn-primary" id='play-btn'>
                <FontAwesomeIcon className='modal-track-icons fa-2x' id='modal-track-play-icon' icon={["fas", "play"]} />
                <h3>Play</h3>
              </button>
            </div>
          </Modal.Body>
          <Modal.Footer className='modal-container2'>
            <div id='modal-container-20'>
              {editing && <button className='btn btn-secondary modal-btn-public'>
                <FontAwesomeIcon className='modal-track-icons' icon={["fas", "eye"]} onClick={() => setVisibility(!visibility)} />
                {!visibility && "Make Public"}
                {visibility && "Make Private"}
              </button>}
            </div>
            <div id='modal-container-21'>
              <button className='btn btn-secondary modal-btn'>
                <FontAwesomeIcon className='modal-track-icons' icon={["fas", "heart"]} />
                Favorite
              </button>
              <button className='btn btn-secondary modal-btn'>
                <FontAwesomeIcon className='modal-track-icons' icon={["fas", "plus"]} />
                Add to Playlist
              </button>
              {editing && <button className='btn btn-secondary modal-btn' onClick={() => updateTrack()}>
                <FontAwesomeIcon className='modal-track-icons' icon={["fas", "edit"]} />
                Save
              </button>}
              {!editing && <button className='btn btn-secondary modal-btn' onClick={() => setEditing(!editing)}>
                <FontAwesomeIcon className='modal-track-icons' icon={["fas", "edit"]} />
                Edit
              </button>}
            </div>
          </Modal.Footer>
        </div>
      </div>
    </>
  );
}

export default TrackModal;