import React from 'react';
import Github from './social/Github';
import Youtube from './social/Youtube';
import Instagram from './social/Instagram';
import Twitter from './social/Twitter';

const Social = () => {
  return (
    <div id="social">
      <h2>Find me on the interwebs</h2>
      <div className="flex flex-row flex-wrap justify-around">
        <Twitter />
        <Github />
        <Instagram />
        <Youtube />
      </div>
    </div>
  );
}

export default Social;