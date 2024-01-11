<h3 align="center">
   <img src="https://cdn.iconscout.com/icon/free/png-512/express-1-1175029.png" alt="ExpressJS" width="30" height="30"/>
   <br/>
   <strong>ExpressJS</strong>
</h3>

#### [] Introduction

- A micro-framework for creating complete web application using nodejs & making API

#### [] Learning Resources

- [Learn With Sumit - Nodejs](https://www.youtube.com/playlist?list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr) `Tutorial`

#### [] Certifications

#### [] Timelines

- `2024-01-07` Started learning _ExpressJS_ from _Nodejs_ tutorial on Learn With Sumit

<br/>
<br/>
<br/>
<br/>
<br/>

<h3 align="center">Notes</h3>

##### Learn With Sumit - Nodejs

- **Expressjs** (Micro-framework for creating complete web application using nodejs & making API) (express(), application, request, response, router)

- **Express Function** (.json() - json body parseing, .raw() - raw body parsing, .text() - text body persing, .urlencoded() - url encoded body parsing, .static(\_\_dirname + '/public/') - public folder, .Router() - routing mechanism)

- **Express Application** (.locals - storing variables, .mountpath - root path of sub app, .on("mount") - mount event for sub app, .all() - all http methods for routes, .enable() - enable an option, .disable() - disable an option, .METHOD_NAME() - specific http methods, .get/set() - setting & getting variables, .listen() - starts server, .param() - url parameter, .path() - canonical path of sub app, .route() - group of routes, .use() - using middleware, template engine rendering - 0)

- **Express Request** (represents the http request; properties : .baseUrl - base path of current app, .originalUrl - original path of current app, .path - path of current app, .host - hostname of server, .ip - ip address of server, .method - request method, .protocol - https/http/others, .params - object of parameters with colon, .query - request query parameters, .body - request body, .cookies - client's cookies, .signedCookies - client's secured cookies, .secure - is https or non-https, .app - application object, .route - route object) (.body requires parser like express.json() & .cookies requires cookie-parser) (methods : .accepts() - checking client's fomat, .get() - getting a header)

- **Express Response** (properties : .app - application object, .headersSent - is headers sent, res.locals - local variables in template; methods : .cookie() - setting cookie, res.clearCookie() - clearing cookie, .end() - ending response process, .send() - ending with data, .json() - sending json, .status() - setting status code, .sendStatus() - sending status code with data, .render() - renders a view, .format() - sending data with multiple content types, .location() - sets the response location for redirecting, .redirect() - auto redirect, .get/set() - getting or setting header)

- **Express Middleware** (types - application-level, routing-level, built-in, error-handling)

- **Express Router** (methods : .all() - all http methods, .METHOD_NAME() - specific http method, .param() - url parameter, .route() - group of routes, .use() - using middleware) (route path - can not only use strings but also pattern and regular expression or regex)

- **Error Handling** ()
