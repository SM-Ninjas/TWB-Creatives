import React, { useEffect } from "react";
import Disqus from "disqus-react";

interface DisqusCommentsProps {
  url: string;
  identifier: string;
  title: string;
}

const DisqusComments: React.FC<DisqusCommentsProps> = ({
  url,
  identifier,
  title,
}) => {
  const disqusShortname = "twb-creatives-1";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://${disqusShortname}.disqus.com/embed.js`;
    script.setAttribute("data-timestamp", `${+new Date()}`);
    document.head.appendChild(script);

    return () => {
      // Cleanup the script when the component is unmounted
      document.head.removeChild(script);
    };
  }, [disqusShortname, url, identifier, title]);

  const disqusConfig = {
    url,
    identifier,
    title,
  };

  return (
    <div>
      <div id="disqus_thread "></div>
      <noscript>
        Please enable JavaScript to view the{" "}
        <a href={`https://${disqusShortname}.disqus.com/?ref_noscript`}>
          comments powered by Disqus.
        </a>
      </noscript>
      <div className="w-[950px]" >
      <Disqus.DiscussionEmbed  shortname={disqusShortname}  config={disqusConfig} />
      </div>
    </div>
  );
};

export default DisqusComments;
