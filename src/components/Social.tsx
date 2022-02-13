import React from 'react';
import SocialCard from './social/SocialCard';
import { faTwitter, faGithub, faYoutube, faInstagram, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Social = () => {
  return (
    <div className="mt-24 min-h-[50vh]">
      <span id="social" className="block relative -top-10" />
      <h2 className="h2 text-center">Find me on the interwebs</h2>
      <div className="flex flex-row flex-wrap justify-center gap-4 w-full">
        <SocialCard title="Twitter" text="A collection of my latest shower thoughts" cta="Follow" href="https://twitter.com/flyme2bluemoon" icon={faTwitter} />
        <SocialCard title="Github" text="A place for me to show off my code" cta="Visit" href="https://github.com/flyme2bluemoon" icon={faGithub} />
        <SocialCard title="Youtube" text="A chronicle of my latest travel, before the pandemic at least" cta="Watch" href="https://www.youtube.com/channel/UCbOygd7cfMtsl3nKCJP_8Kg" icon={faYoutube} />
        <SocialCard title="Instagram" text="An assortment of way to many plane pictures" cta="Follow" href="https://instagram.com/flyme2bluemoon" icon={faInstagram} />
        <SocialCard title="Email" text="A method to contact me" cta="Contact" href="mailto:335562906@gapps.yrdsb.ca" icon={faEnvelope} />
        <SocialCard title="Twitch" text="A website where I occasionally stream to" cta="Watch" href="https://twitch.tv/flyme2bluemoon" icon={faTwitch} />
      </div>
    </div>
  );
}

export default Social;