import axios from 'axios';

// { id: .., name: ..}
export function karaoke(track) {
  const info = shortenTrackInfo(track);
  return axios.post(`${process.env.VUE_APP_OA_API_URL}/karaoke`, info);
}

export function shortenTrackInfo(track) {
  return {
    id: track.id,
    artist: track.ar[0].name,
    track: track.name,
    album: track.al.name,
    trackNumber: track.no,
    duration: ~~(track.dt / 1000),
  };
}
