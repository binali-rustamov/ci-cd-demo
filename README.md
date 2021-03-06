NodeJS + TypeScript + Express + InversifyJS + Docker + CI/CD

TODO: docker, gitlab ci
---
# Requirements
 - NodeJS version => v15.8.0

# How to start?
 - type `npm install`
 - change connection settings to mongo in index.ts, or just run `docker-compose up`.
 - type `npm run build`
 - type `npm start`
 - send some request from Postman (or curl):
   - GET http://localhost:3000/todo
   - POST http://localhost:3000/todo
      ```json
       {
         "description": "Привет мир",
         "isDone": true,
         "title": "ESDP like"
       }
      ```
     
# Tests?
 - type `npm test`

# Additional links
 - https://github.com/inversify/InversifyJS
 - https://github.com/inversify/inversify-express-utils
 - https://tomanagle.medium.com/strongly-typed-models-with-mongoose-and-typescript-7bc2f7197722
 - https://medium.com/@agentwhs/complete-guide-for-typescript-for-mongoose-for-node-js-8cc0a7e470c1
 - https://github.com/florinn/typemoq
 - https://docs.docker.com/compose/gettingstarted/