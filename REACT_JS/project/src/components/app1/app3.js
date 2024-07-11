import React from 'react'

function Profile3() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile3 />
      <Profile3 />
      <Profile3 />
    </section>
  );
}
//   only capital P in profile to Profile

export default Gallery;
