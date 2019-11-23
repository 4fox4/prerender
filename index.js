const prerender = require('prerender');
const server = prerender({
  pageDoneCheckInterval: 1000
});
server.use(prerender.removeScriptTags());
server.start();