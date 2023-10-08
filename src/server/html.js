import React from "react";

export default function HTML() {
  return (
    <html>
      <head>
        <title>My App</title>
        <style
          dangerouslySetInnerHTML={{
            __html: "code{background:unset !important;}",
          }}
        />
      </head>
      <body>
        <div id="app"></div>
      </body>
    </html>
  );
}
