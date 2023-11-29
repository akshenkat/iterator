const musicCollection = {
    albums: [
      {
        title: "The Wall",
        artist: "Pink Floyd",
        year: "1979"
      },
      {
        title: "Made in Japan",
        artist: "Deep Purple",
        year: "1972"
      },
      {
        title: "Tommy",
        artist: "The Who",
        year: "1969"
      }
    ],
    [Symbol.iterator]: function() {
      let index = 0;
      return {
        next: () => {
          if (index < this.albums.length) {
            const album = this.albums[index++];
            return { value: `${album.title} - ${album.artist} (${album.year})`, done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  for (const album of musicCollection) {
    console.log(album);
  }