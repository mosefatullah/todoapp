### NodeJS

#### [] Introduction
* Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

#### [] Learning Resources
* [Learn With Sumit - Nodejs](https://www.youtube.com/playlist?list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr) `Tutorial`

#### [] Certifications
* None

#### [] Timelines
* `2024-01-01` Started *Nodejs* tutorial on Learn With Sumit

### [] Covered Topics

#### Learn With Sumit - Nodejs

- **About Nodejs** (How it is event-driven, non-blocking I/O, asynchronus and single-threaded) (error back pattern in a callback function)

- **Global Object & Module System** (Nodejs has global object but dont has window object. Modular system has privity, code organization, reusability, encapsulation, and scalability. Nodejs is is modular by design) (Behind the scene of `module, exports, require, __dirname, __filename`)

- **Server & Core Modules** (Creating server with http module. Core modules of nodejs like fs, events, os, path, http) (All frameworks of nodejs are based on core modules)

- **Stream & Buffer** ($Stream = ∑Buffers$) (Buffer is a binary based data type, small part of stream and stream comes to browser as many parts called chunks. Buffers are packets of chunks. These decrease loading time) (fs.createRreadStream, chunk.toString, Buffer().concat(), writeStream, pipe)

- **Anatomy Of A Nodejs Application** (Application running command - node index/app) (`index.js/app.js`: comment section, dependency section, module scaffolding/app object, configuration object, function declaration, function invocation) (Application has control over server)

- **Raw Project for Understanding** (Uptime monitoring api : restful api, authentication, authorization, user signup & add/edit settings, sms notification using twilio api - with raw nodejs, no modules)

- - **Requirements Analysis :-**

- - - 1. Start the API Server
- - - 2. Create, Edit, Delete User
- - - 3. Token based authentication
- - - 4. Logout Mechanism
- - - 5. Set links & Up/Down
- - - 6. Edit/Delete links & rate limit
- - - 7. Check up/down time

- - **Environment** - Eslint & Prettier (eslint, eslint-config-airbnb-base, eslint-config-prettier, eslint-plugin-import, eslint-plugin-prettier, prettier), Server restarting (nodemon)

- - **Database** - JSON (Unreal; Only for Our Project)

- - **Project** -

- - - **[Part1]** (Built-in modules - http, url, string_decoder) (index.js, helpers/handleReRes.js, routes/routes.js, routes/handlers/sampleHandler.js, routes/handler/notFoundHandler.js)

- - - **[Part2]** (Environment variables - run `KEY=VALUE node index/app` & use `process.env.KEY`; nodemon - for windows : `SET \"NODE_ENV=production\" && nodemon index`, for mac : `NODE_ENV=production nodemon index`) (helpers/environment.js, .data/, lib/data.js)

- - - **[Part3]** (Built-in module for hash - crypto) (CRUD handling for users) (.data/users/, routes/handlers/userHandler.js, helpers/utilities.js)

- - - **[Part4]** (Generating tokens by creating simple random string) (CRUD handling for tokens) (routes/handlers/tokenHandler.js, .data/tokens/)

- - - **[Part5]** (Max limits in environment variable like 5 checks) (CRUD handling for checks) (routes/handlers/checkHandler.js, .data/checks/)

- - - **[Part6]** (Built-in modules - https, querystring) (Using twilio api for sending messages to user's phone) (helpers/notify.js)

- - - **[Part7]** (Running background workers in loop) (lib/server.js, lib/workers.js)