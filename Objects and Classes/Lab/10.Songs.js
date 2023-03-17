function solve(array) {
    let songs = [];
    const numberOfSongs = array.shift();
    const sortingType = array.pop();

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = array[i].split('_');
        songs.push(new Song(type, name, time));
    }

    if (sortingType === 'all') {
        for (const song of songs) {
            console.log(song.name);
        }
    } else {
        for (const song of songs) {
            if (song.typeList === sortingType) {
                console.log(song.name);
            }
        }
    }

}

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])

solve([4,

    'favourite_DownTown_3:14',

    'listenLater_Andalouse_3:24',

    'favourite_In To The Night_3:58',

    'favourite_Live It Up_3:48',

    'listenLater'])