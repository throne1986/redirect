const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");
const _ = require("lodash");

const { window } = new JSDOM(
  `
<body>
   <script src='./node_modules/ccapture.js/build/CCapture.all.min.js'></script>
    <canvas id='animation' width='400' height='200'></canvas>
</body>
`,
  // We need these options to allow JSDOM to require CCapture from node_modules
  { runScripts: "dangerously", resources: "usable" }
);

const document = window.document;

// Do our stuff after DOM is ready.
window.onload = () => {
  const canvas = document.getElementById("animation");
  const ctx = canvas.getContext("2d");

  // Doing some random animation here
  const render = () => {
    ctx.fillStyle = "blue";
    ctx.font = "30px Impact";
    ctx.rotate(_.random(0.1, 0.2));
    ctx.fillText("Awesome!", 50, 100);
  };

  // Framerate for capturer is 1 per second just for example
  const capturer = new window.CCapture({
    format: "png",
    framerate: 1,
    verbose: true
  });

  capturer.start();

  // Doing 3 renders, and capture the canvas
  const interval = setInterval(() => {
    render();
    capturer.capture(canvas);
  }, 1000);

  // Now clearing the interval, stopping capturer
  setTimeout(() => {
    clearInterval(interval);

    capturer.stop();

    // Saving the file using FileReader (from JSDOM) and node.js API
    capturer.save(blob => {
      const reader = new window.FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result;
        const uint8Array = new Uint8Array(arrayBuffer);

        // Sync for simplicity
        fs.writeFileSync("./images.tar", uint8Array, { encoding: "binary" });
      };

      reader.readAsArrayBuffer(blob);
    });
  }, 4000);
};
