import React,{ useState, useEffect} from 'react';

const SongList = () => {

    const [songs, setSongs] = useState([
        {title: 'dole dole', id: 1},
        {title: 'Waiting for tonight', id: 2},
        {title: 'Psy gentlemen', id: 3},
    ]);

    const addSong = () => {
        setSongs([...songs, { title: 'gala gala ', id: 4 }])
    }

    useEffect(() => {
        console.log('...songs', songs)
    }, [songs])

    return (
        <div>
           <ul>
               {
                   songs.map((song) => {
                       return <li key={song.id}>{song.title}</li>
                   })
               }
           </ul> 
           <button onClick={addSong}>Add Song</button>
        </div>
    );
}
 
export default SongList;