const playlists = [
  {
    title: 'Chill Vibes',
    image: './img/playlist-chill.jpg',
    description: 'A playlist for chill vibes',
  },
  {
    title: 'Focus',
    image: './img/playlist-focus.jpg',
    description: 'A playlist for focus',
  },
  {
    title: 'Late Night',
    image: './img/playlist-late-night.jpg',
    description: 'A playlist for late night',
  },
  {
    title: 'Love Songs',
    image: './img/playlist-love.jpg',
    description: 'A playlist for love songs',
  },
  {
    title: 'Oldies',
    image: './img/playlist-oldies.jpg',
    description: 'A playlist for oldies',
  },
  {
    title: 'Sad',
    image: './img/playlist-sad.jpg',
    description: 'A playlist for sad songs',
  },
];

// Add your code here...
const ul = document.querySelector('#playlists-grid')

const handleClick = () => {console.log('click')}

playlists.forEach((song) => {
  const li = document.createElement('li')

  const img = document.createElement('img')

  const p = document.createElement('p')

  li.dataTitle = song.title

  img.src = song.image
  img.alt = 'Good music'

  li.className = "playlist-card"
  
  li.addEventListener('click', handleClick);

  p.textContent = song.description

  li.append(img, p)
  ul.append(li)
});