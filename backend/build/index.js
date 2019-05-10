"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== 'production';
const dir = './frontend';
const app = next({ dev, dir });
console.log(app.dir);
const handle = app.getRequestHandler();
const port = dev ? 3000 : process.env.PORT;
app
    .prepare()
    .then(() => {
    const server = express();
    server.get(`/p/:id`, (req, res) => {
        const actualPage = `/post`;
        const queryParams = { id: req.params.id };
        app.render(req, res, actualPage, queryParams);
    });
    server.get('*', (req, res) => {
        return handle(req, res);
    });
    server.listen(port, (err) => {
        if (err) {
            throw err;
        }
        console.log(`> Ready on port ${port}`);
    });
})
    .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
});
//# sourceMappingURL=index.js.map