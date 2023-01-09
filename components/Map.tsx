import React from 'react';

function Map() {
  return (
    <div className="flex items-center justify-center w-full lg:w-[50%] h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113191.97347719506!2d76.57633543103366!3d27.55477638775177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3972998fa7e65df3%3A0x38cebba39ee426f2!2sAlwar%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1673204940256!5m2!1sen!2sin"
        width="600"
        height="800"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
