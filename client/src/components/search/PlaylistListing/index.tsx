import * as React from 'react';
import { navigate } from '@reach/router';
import { PlayerIcon } from 'react-player-controls';
import { ImageLoader } from '../../';
import { playAlbum, resetPlaylistViewing } from '../../../store';
import './style.css';

interface Props {
  playlist: Playlist;
}

function PlaylistListing(props: Props) {
  const [showPlayIcon, setPlayIcon] = React.useState(false);
  const { playlist } = props;
  const { images, name } = playlist;

  function navigateToPlaylist() {
    const { id, owner = { id: '' } } = playlist;
    resetPlaylistViewing();
    navigate(`/playlist/${owner.id}/${id}`);
  }
  function handlePlaylistPlay(e) {
    e.stopPropagation();
    playAlbum(playlist);
  }
  function handleOnMouseEnter() {
    setPlayIcon(true);
  }
  function handleOnMouseLeave() {
    setPlayIcon(false);
  }

  return (
    <div className="playlist-listing">
      <div
        className="playlist-listing__wrapper"
        onClick={navigateToPlaylist}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        {showPlayIcon ? (
          <PlayerIcon.Play
            width="25%"
            height="25%"
            style={{
              fill: 'var(--primary)',
              position: 'absolute',
              marginRight: 32,
            }}
            isEnabled={true}
            onClick={handlePlaylistPlay}
          />
        ) : null}
        <ImageLoader alt={name} src={images[0].url} />
      </div>

      <p>{name}</p>
    </div>
  );
}

export default PlaylistListing;
