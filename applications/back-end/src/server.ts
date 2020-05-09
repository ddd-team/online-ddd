import express from "express"
import { initGraphQL } from "./graphql"

var app = express()

initGraphQL(app)

app.listen(4000)

console.log("Running a GraphQL API server at http://localhost:4000/graphql")
