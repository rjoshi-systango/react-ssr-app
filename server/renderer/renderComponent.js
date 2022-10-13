import React from 'react';

const HTML = (props) => {
  return (
    <html lang="en">
      <head>
        <title>{props.metaText.name}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css"
        />
        <meta name="description" content={props.metaText.tag}></meta>
      </head>
      <body>
        <div
          id="root"
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.__SERIALIZED_STATE__ =
              JSON.stringify(${props.serverState})
          `
        }}
        />
        <script type="application/javascript" src="browser.js" />
      </body>
    </html>
  );
};



export default HTML;
