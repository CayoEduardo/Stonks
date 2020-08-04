# Stonks

This is a js project to store information about bought and sold stocks and their generated revenue.

# Install

## Dependencies

To install, simply download the folders and run

```sh
npm i
```

This will install all dependencies required to run

## MongoDB

This requires a local instance of MongoDB to run.
You can follow [Mongo install instructions](https://docs.mongodb.com/manual/installation/) to have a running local instance or use a cloud solution like [MongoDbAtlas](https://www.mongodb.com/cloud/atlas). You will have to change `mongoURI` on the `config/default.json` depending on your DB solution.

# Running Server

To run the server, use node server. If everything is correct, a message showing that the server is listening on port 3000 and mongodb connection was successfull.
