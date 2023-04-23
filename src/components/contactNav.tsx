import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ContactNav() {
  const openSite = (link: string | URL | undefined) => {
    window.open(link, "_blank");
  };

  const [mH, setMH] = useState(false);
  const [gH, setGH] = useState(false);
  const [lH, setLH] = useState(false);
  const [rH, setRH] = useState(false);

  return (
    <div className="absolute top-0 right-0 flex flex-row justify-evenly p-4 w-auto text-gray-50 z-1000">
      <a
        href="mailto:pshreyash2201@gmail.com?subject=Hey%20There🤚&body=Email"
        className="text-4xl px-5"
        title="email"
        aria-label="View My Email"
        onMouseEnter={() => setMH(true)}
        onMouseLeave={() => setMH(false)}
      >
        <FontAwesomeIcon icon={faEnvelope} beat={mH} />
      </a>
      <div
        className="text-4xl px-5"
        title="Github"
        aria-label="View My Github"
        onClick={() => openSite("https://github.com/resonantchaos22")}
        onMouseEnter={() => setGH(true)}
        onMouseLeave={() => setGH(false)}
      >
        <FontAwesomeIcon icon={faGithubAlt} beat={gH} />
      </div>
      <div
        className="text-4xl px-5"
        title="Linkedin"
        aria-label="View My Linkedin"
        onClick={() => openSite("https://www.linkedin.com/in/shreyash2201")}
        onMouseEnter={() => setLH(true)}
        onMouseLeave={() => setLH(false)}
      >
        <FontAwesomeIcon icon={faLinkedin} beat={lH} />
      </div>
      <div
        className="text-4xl px-5"
        title="Resume"
        aria-label="View My Resume"
        onClick={() =>
          openSite(
            "https://drive.google.com/file/d/1ROmrTCgxKgaiVNfuCwHR_6OxT0y6EZ4r/view?usp=sharing"
          )
        }
        onMouseEnter={() => setRH(true)}
        onMouseLeave={() => setRH(false)}
      >
        <FontAwesomeIcon icon={faFileAlt} beat={rH} />
      </div>
    </div>
  );
}
