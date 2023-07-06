

interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details
}

interface Details {
    author: string,
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed sheeran',
        year: 2015
    }
}

const song = 'New Song'

/*
*
* song:anothersong => renombra la varibale
* */
//
// const { song:anothersong, audioVolume, songDuration, details} = audioPlayer
// const { author:author} = details

// console.log(audioVolume, songDuration, anothersong)
// console.log(author)


/*array*/

const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta', 'trunks']
// const dbz: string[] = ['Goku', 'Vegeta', 'trunks']

// const [, , trunks] = dbz
// const trunks = dbz[3] || 'No hay personaje'

console.log('Personaje 3:', trunks)



export {}