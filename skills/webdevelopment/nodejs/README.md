<h3 align="center">
    <img src="https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png" alt="NodeJS" width="30" height="30"/>
    <br/>
    <strong>NodeJS</strong>
</h3>

#### [] Introduction

- Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

#### [] Learning Resources

- [Learn With Sumit - Nodejs](https://www.youtube.com/playlist?list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr) `Tutorial`

#### [] Certifications

- None

#### [] Timelines

- `2024-01-01` Started _Nodejs_ tutorial on Learn With Sumit

<br/>
<br/>
<br/>
<br/>
<br/>
<h3 align="center">Notes</h3>

#### Nodejs - Topic

- Nodejs Architecture
- Nodejs Built-in Modules
- Express Framework
- Route & Middleware
- Template Engines
- Session & Cookies
- Authentication Techniques
- File Upload, Public Directory
- Error Handling & Debugging
- REST API Specifications
- MongoDB with Mongoose
- MySQL with Sequelize
- Email with Nodemailer
- Twilio, Sendgrid and Pusher
- Socket.io
- GraphQL, Prisma & Apollo
- Cloudinary, AWS S3 & Vimeo
- Test Driven Development
- NodeJS Design Patterns

<br/>
<br/>

#### Learn With Sumit - Nodejs

- **About Nodejs** (How it is event-driven, non-blocking I/O, asynchronus and single-threaded) (error back pattern in a callback function)

- **Global Object & Module System** (Nodejs has global object but dont has window object. Modular system has privity, code organization, reusability, encapsulation, and scalability. Nodejs is is modular by design) (Behind the scene of `module, exports, require, __dirname, __filename`)

- **Server & Core Modules** (Creating server with http module. Core modules of nodejs like fs, events, os, path, http) (All frameworks of nodejs are based on core modules)

- **Stream & Buffer** ($Stream = ∑Buffers$) (Buffer is a binary based data type, small part of stream and stream comes to browser as many parts called chunks. Buffers are packets of chunks. These decrease loading time) (fs.createRreadStream, chunk.toString, Buffer().concat(), writeStream, pipe)

- **Anatomy Of A Nodejs Application** (Application running command - node index/app) (`index.js/app.js`: comment section, dependency section, module scaffolding/app object, configuration object, function declaration, function invocation) (Application has control over server)

- **Raw Project for Understanding** (Uptime monitoring api : restful api, authentication, authorization, user signup & add/edit settings, sms notification using twilio api - with raw nodejs, no modules)

  - **Requirements Analysis :-**

    - 1. Start the API Server
    - 2. Create, Edit, Delete User
    - 3. Token based authentication
    - 4. Logout Mechanism
    - 5. Set links & Up/Down
    - 6. Edit/Delete links & rate limit
    - 7. Check up/down time

  - **Environment** - Eslint & Prettier (eslint, eslint-config-airbnb-base, eslint-config-prettier, eslint-plugin-import, eslint-plugin-prettier, prettier), Server restarting (nodemon)

  - **Database** - JSON (Unreal; Only for Our Project)

  - **Project** -

    - **[Part1]** (Built-in modules - http, url, string_decoder) (index.js, helpers/handleReRes.js, routes/routes.js, routes/handlers/sampleHandler.js, routes/handler/notFoundHandler.js)

    - **[Part2]** (Environment variables - run `KEY=VALUE node index/app` & use `process.env.KEY`; nodemon - for windows : `SET \"NODE_ENV=production\" && nodemon index`, for mac : `NODE_ENV=production nodemon index`) (helpers/environment.js, .data/, lib/data.js)

    - **[Part3]** (Built-in module for hash - crypto) (CRUD handling for users) (.data/users/, routes/handlers/userHandler.js, helpers/utilities.js)

    - **[Part4]** (Generating tokens by creating simple random string) (CRUD handling for tokens) (routes/handlers/tokenHandler.js, .data/tokens/)

    - **[Part5]** (Max limits in environment variable like 5 checks) (CRUD handling for checks) (routes/handlers/checkHandler.js, .data/checks/)

    - **[Part6]** (Built-in modules - https, querystring) (Using twilio api for sending messages to user's phone) (helpers/notify.js)

    - **[Part7]** (Running background workers in loop) (lib/server.js, lib/workers.js)

- **Expressjs** (Micro-framework for creating complete web application using nodejs & making API) (express(), application, request, response, router)

- **Express Function** (.json() - json body parseing, .raw() - raw body parsing, .text() - text body persing, .urlencoded() - url encoded body parsing, .static(\_\_dirname + '/public/') - public folder, .Router() - routing mechanism)

- **Express Application** (.locals - storing variables, .mountpath - root path of sub app, .on("mount") - mount event for sub app, .all() - all http methods for routes, .enable() - enable an option, .disable() - disable an option, .METHOD_NAME() - specific http methods, .get/set() - setting & getting variables, .listen() - starts server, .param() - url parameter, .path() - canonical path of sub app, .route() - group of routes, .use() - using middleware, template engine rendering - 0)

- **Express Request** (represents the http request; properties : .baseUrl - base path of current app, .originalUrl - original path of current app, .path - path of current app, .host - hostname of server, .ip - ip address of server, .method - request method, .protocol - https/http/others, .params - object of parameters with colon, .query - request query parameters, .body - request body, .cookies - client's cookies, .signedCookies - client's secured cookies, .secure - is https or non-https, .app - application object, .route - route object) (.body requires parser like express.json() & .cookies requires cookie-parser) (methods : .accepts() - checking client's fomat, .get() - getting a header)

- **Express Response** (properties : .app - application object, .headersSent - is headers sent, res.locals - local variables in template; methods : .cookie() - setting cookie, res.clearCookie() - clearing cookie, .end() - ending response process, .send() - ending with data, .json() - sending json, .status() - setting status code, .sendStatus() - sending status code with data, .render() - renders a view, .format() - sending data with multiple content types, .location() - sets the response location for redirecting, .redirect() - auto redirect, .get/set() - getting or setting header)

- **Express Middleware** (types - application-level, routing-level, built-in, error-handling)

- **Express Router** (methods : .all() - all http methods, .METHOD_NAME() - specific http method, .param() - url parameter, .route() - group of routes, .use() - using middleware) (route path - can not only use strings but also pattern and regular expression or regex)


- **Error Handling** (managing errors in both synchronous and asynchronous contexts) (synchronous system - express's default error handler operates invisibly; to modify that we have to write our custom middleware function down below & then send our response) (asynchronous system - passing error to next functio, detected from built-in error objects or try-catch blocks) (middleware chaining in route arrays - reduces asynchronous code, making it more synchronous)

- **File Upload with Multer** (parsing multi-part data or form data; methods : .single - one field & one file, .array - one field but multiple files, .fields - multiple fields, .none - not files but form data) (file upload validation properties : limits, limits.fileSize - size limit in bytes, limits.fileFilter - callback function for validation) (file configuration methods : .diskStorage - modify destination & filename)

- **MongoDB Introduction & Installation** (mongodb is a nosql language and non-relational database management system; it's useful for javascript developers, because it uses bson format (lightweight, traversable, and efficient rather than json) similar to the structures of json) (sql to nosql : table - collection, row - document, column - field) (locally installation - try free > mongodb local > mongodb community server > download; then read the docs - docs > server > installation > community edition > follow the processes)

- **MongoDB Basic CRUD Commands** (Command of opening mongo shell : mongo) (default database - admin, config, local (don't touch)) (mongodb commands : show dbs - showing all databases, use NAME - create & switch to a new database, db - current database, db.NAME - create a new collection, db.NAME :- .insertOne({}) - insert a document, .find()/.find().pretty()/... .limit()/skip() - find all documents, .insertMany([]) - insert multiple documents, .findOne() - find one collection, .updateOne({}, {})/.updateMany({}, {}) - updating collections (find+update), .deleteOne({})/deleteMany({}) - deleting collections) (MongoDB compass is for visualization without any commands)

- **Mongoose CRUD Application**- (Mongoose is a Object Data Modeling for mongodb; it's used to model the data as js object; Mongoose connects to the MongoDB server automatically, whereas MongoDB does not) (Benefits - abstraction from raw low level mongodb, relation between nosql data, provides schema validation, translation of data into object, 40 to 60% less code compared to raw mongodb package) (topics - schema design, mongoose model using schema) (CRUD methods : .find, .findById, .save, .insertMany, .updateOne, .deleteOne, .findByIdAndUpdate)
