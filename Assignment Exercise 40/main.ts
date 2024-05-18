// Define make_album function
function make_album(artist_name:string,album_title:string,tracks?:number){
  let album:{artist:string,title:string,tracks?:number} = {
    artist: artist_name,
    title: album_title,
  };

  if(tracks !== undefined){
      album.tracks = tracks;
  };

  return album;
}

// Calling three functions and creating three vriables with different values
let album1 = make_album("FarisShafi","Lafz");

let album2 = make_album("Aur","Tu hai Kahan");

// Calling a make_album function with third parameter
let album3 = make_album("Abdul Hannan","Iraaday",10);

// Print values of an object created by function
console.log(album1);
console.log(album2);
console.log(album3);

