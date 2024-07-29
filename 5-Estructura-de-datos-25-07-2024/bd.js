//const peliculas = ['uno', 'dos', 'tres']
//los objetos siempre van, propiedad y valor, siempre debes tener en cuenta la sintaxis
/* id, nombre, year, genero, image*/
let cancionesRock = [
   //* {
       // id: 1,
        //nombre: 'Twisters',
        //year: 2024,
        //direccion: 'Lee Isaac Chung',
        //guionistas: ['Mark L. Smith','Michael Crichton','Joseph Kosinski'],
        //genero: 'acción',
        //image: 'https://upload.wikimedia.org/wikipedia/en/2/24/Twisters_Official_US_Theatrical_Poster.jpg'
    //},
    {
        id: 1,
        nombre: 'Stairway to Heaven',
        band: 'Led Zeppelin',
        year: 1971,
        genero: 'Rock / Hard Rock',
        image: 'https://arthive.com/es/artists/10896~Jim_Warren/works/294098~Stairway_to_heaven#show-work://294098'
    },
    {
        id: 2,
        nombre: 'Bohemian Rhapsody',
        band: 'Queen',
        year: 1975,
        genero: 'Rock / Opera Rock',
        image: 'https://www.queenonline.com/global/uploads/NATO-7-010.jpg'
    },
    {
        id: 3,
        nombre: 'Smells Like Teen Spirit',
        band: 'Nirvana',
        year: 1991,
        genero: 'Grunge / Alternative Rock',
        image: 'https://i.redd.it/i-turned-the-smells-like-teen-spirit-music-video-into-a-v0-7qyben9icutb1.jpg?width=1200&format=pjpg&auto=webp&s=9cf72a7fe4e5e6ea60783d977073d8f4353be15e',
    },
    {
        id: 4,
        nombre: 'Enter Sandman',
        band: 'Metallica',
        year: 1991,
        genero: 'Heavy Metal / Thrash Metal',
        image: 'https://rockear.co/wp-content/uploads/2021/07/portadaGaleriaMetallica.jpg',
    },
    {
        id: 5,
        nombre: 'Hotel California',
        band: 'Eagles',
        year: 1976,
        genero: 'Rock / Classic Rock',
        image: 'https://universalsonica.org/wp-content/uploads/2023/12/efemerides-13-1100x733.jpg',
    },
    {
        id: 6,
        nombre: 'Sweet Child o Mine',
        band: 'Guns N Roses',
        year: 1987,
        genero: 'Hard Rock',
        image: 'https://i1.sndcdn.com/artworks-5vpGcQ5nzdNj7IRv-1gRr7A-t500x500.jpg',
    },
    {
        id: 7,
        nombre: 'Back in Black',
        band: 'AC/DC',
        year: 1980,
        genero: 'Hard Rock / Heavy Metal',
        image: 'https://fracturerecords.com.mx/11950-large_default/acdc-back-in-black-cd.jpg',
    },
    {
        id: 8,
        nombre: 'Paranoid',
        band: 'Black Sabbath',
        year: 1970,
        genero: 'Heavy Metal',
        image: 'https://m.media-amazon.com/images/M/MV5BZWEwNjViNmUtNGNhNy00NTM4LWI1N2MtMTEyNTM1NDIxMGQ0XkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg',
    },
    {
        id: 9,
        nombre: 'Iron Man',
        band: 'Black Sabbath',
        year: 1970,
        genero: 'Heavy Metal',
        image: 'https://preview.redd.it/ylcyjcrkepn71.jpg?width=640&crop=smart&auto=webp&s=f1fb71e250fdabd465038617a552543b454e2a4f',
    },
    {
        id: 10,
        nombre: 'Another Brick in the Wall (Part 2)',
        band: 'Pink Floyd',
        year: 1979,
        genero: 'Progressive Rock',
        image: 'https://thewallcomplete.com/wp-content/uploads/2016/04/pink-floyd-one-of-my-turns-harvest-7-adj.jpg',
    },
    {
        id: 11,
        nombre: 'Kashmir',
        band: 'Led Zeppelin',
        year: 1975,
        genero: 'Rock / Hard Rock',
        image: 'https://i.etsystatic.com/20521415/r/il/69bcdf/4151585272/il_fullxfull.4151585272_g9fx.jpg',
    },
    {
        id: 12,
        nombre: 'One',
        band: 'Metallica',
        year: 1988,
        genero: 'Heavy Metal / Thrash Metal',
        image: 'https://gcdn.emol.cl/los-80/files/2022/05/55974d8fb8690f55b56ff182ed872d28.jpg',
    },
    {
        id: 13,
        nombre: 'November Rain',
        band: 'Guns N Roses',
        year: 1991,
        genero: 'Hard Rock',
        image: 'https://i1.sndcdn.com/artworks-000169278038-w4m16l-t500x500.jpg',
    },
    {
        id: 14,
        nombre: 'Highway to Hell',
        band: 'AC/DC',
        year: 1979,
        genero: 'Hard Rock / Heavy Metal',
        image: 'https://www.tonevendor.com/cdn/shop/products/19132573-04085895628518ea75519628518ea7551c1652889834628518ea7551f.jpg?v=1709583183',
    },
    {
        id: 15,
        nombre: 'Creep',
        band: 'Radiohead',
        year: 1992,
        genero: 'Alternative Rock / Grunge',
        image: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Creep_by_radiohead_reissue.png', 
    },
    {
        id: 16,
        nombre: 'Fade to Black',
        band: 'Metallica',
        year: 1984,
        genero: 'Heavy Metal / Thrash Metal',
        image: 'https://i1.sndcdn.com/artworks-000178864273-s8dgmn-t500x500.jpg',
    },
    {
        id: 17,
        nombre: 'You Shook Me All Night Long',
        band: 'AC/DC',
        year: 1980,
        genero: 'Hard Rock / Heavy Metal',
        image: 'https://i1.sndcdn.com/artworks-A3uXzyJYxZ5377jr-U8dT3Q-t500x500.jpg',
    },
    {
        id: 18,
        nombre: 'Livin on a Prayer',
        band: 'Bon Jovi',
        year: 1986,
        genero: 'Rock / Glam Metal',
        image: 'https://m.media-amazon.com/images/M/MV5BMjE0ZTVlZTktZjY3My00NDhiLThjZjMtMDlmOGVlNjY0ZjAzXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg',
    },
    {
        id: 19,
        nombre: 'Roxanne',
        band: 'The Police',
        year: 1978,
        genero: 'Rock / New Wave',
        image: 'https://lastfm.freetls.fastly.net/i/u/500x500/84041458b01e48219b24b728f145134d.jpg',
    },
    {
        id: 20,
        nombre: 'cant stand losing you',
        band: 'The Police',
        year: 1978,
        genero: 'Rock',
        image: 'https://m.media-amazon.com/images/M/MV5BZDEyM2ExN2MtY2U1OS00ZDU5LWJjMWEtZTgyZjUwN2I4MGM5XkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg',
    },
    {
        id: 21,
        nombre: 'Run to the Hills',
        band: 'Iron Maiden',
        year: 1982,
        genero: 'Heavy Metal',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/MaidenHills02.jpeg/220px-MaidenHills02.jpeg',
    },
    {
        id: 22,
        nombre: 'Welcome to the Jungle',
        band: 'Guns N Roses',
        year: 1987,
        genero: 'Hard Rock',
        image: 'https://akamai.sscdn.co/uploadfile/letras/albuns/e/6/a/5/992341608319508.jpg',
    },
    {
        id: 23,
        nombre: 'Dont Stop Believin',
        band: 'Journey',
        year: 1981,
        genero: 'Rock / Arena Rock',
        image: 'https://i.scdn.co/image/ab67616d0000b27334309f25eefd78eaba338fcd',
    },
    {
        id: 24,
        nombre: 'Master of Puppets',
        band: 'Metallica',
        year: 1986,
        genero: 'Heavy Metal / Thrash Metal',
        image: 'https://i0.wp.com/rockangels.com/wp-content/uploads/2020/03/Metallica.jpg?resize=600%2C438&ssl=1',
    },
    {
        id: 25,
        nombre: 'Thunderstruck',
        band: 'AC/DC',
        year: 1990,
        genero: 'Hard Rock, Heavy Metal',
        image: 'https://i1.sndcdn.com/artworks-000129437053-bgvku6-t500x500.jpg',
    },
    {
        id: 26,
        nombre: 'Under the Bridge',
        band: 'Red Hot Chili Peppers',
        year: 1992,
        genero: 'Alternative Rock / Funk Rock',
        image: 'https://i.scdn.co/image/ab67616d0000b273153d79816d853f2694b2cc70',
    },
    {
        id: 27,
        nombre: 'Hallowed Be Thy Name',
        band: 'Iron Maiden',
        year: 1982,
        genero: 'Heavy Metal',
        image: 'https://m.media-amazon.com/images/I/81wIUw9E3XL._AC_UF1000,1000_QL80_.jpg',
    },
    {
        id: 28,
        nombre: 'Smells Like Teen Spirit',
        band: 'Nirvana',
        year: 1991,
        genero: 'Grunge / Alternative Rock',
        image: 'https://i1.sndcdn.com/artworks-HPgZR8WRb5PFZPBC-fIh2gA-t1080x1080.jpg',
    },
    {
        id: 29,
        nombre: 'Dream On',
        band: 'Aerosmith',
        year: 1973,
        genero: 'Rock / Hard Rock',
        image: 'https://lastfm.freetls.fastly.net/i/u/ar0/57d1a850630344b29535545725daf245.jpg',
    },
    {
        id: 30,
        nombre: 'People Are Strange',
        band: 'The Doors',
        year: 1967,
        genero: 'Rock/ Psychedelic Rock',
        image: 'https://upload.wikimedia.org/wikipedia/en/6/60/PeopleAreStrange.jpg',
    },

]
//Estas canciones han dejado una marca duradera en la historia del rock y el metal, y continúan siendo influyentes en la música moderna.