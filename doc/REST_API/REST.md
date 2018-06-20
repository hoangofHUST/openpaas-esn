# REST API Overview

This describes the implemented REST API of the official OpenPaaS API v0.1. The OpenPaaS REST API is implemented using the HTTP protocol, and the JSON data format.

OpenPaaS API starts from version 0.1 that is not a release version.
It means that from now on, all routes are also defined with the base path /api/v0.1
In fact, all routes have to be exposed like they were before to preserve compatibility.
As a result, documentation files for REST APIs remain valid.

To deal with future new versions of the API, it will be necessary to increment the version number according to the semver versioning.
And  before, to deprecate versions that are no more compatible.

Awesome Modules should manage their own version apart from the esn core.

## Conventions

In this present document, the following conventions are applied:

- **uid** : the uid stands for Unique IDentifier. Two resources of the same type can't have the same uid.
- {something} : brackets marks some variable that need to be changed at runtime.
    Example:

        GET /api/{resource type}/1

    Here we mean that {resource type} should be replaced by the real resource type.

## Prefix

The OpenPaaS REST API is always prefixed by **/api**.

## Verbs

### GET
The GET verb is used to fetch resources.

#### Fetching a resource using its unique ID.

* **Method**: GET
* **URI**: /api/{resource type}/{uid}
* **returns**: a JSON object of the resource

#### Searching for resources

* **Method**: GET
* **URI**: /api/{resource type}
* **parameter(s)**: {search field}={search value}
* **returns**: an array of the JSON objects of resources matching the search

### PUT
The PUT verb is used to store a resource. The stored resource can exist or be a new one.

* **Method**: PUT
* **URI**: /api/{resource type}/{uid}
* **Request Content-type**: application/json
* **Request body**: a JSON object of the resource
* **returns**: the status code 201 if the resource has been created, 200 if the resource has been updated, or an error code (4XX or 5XX)

### POST
The POST verb is used to store a resource. However, when POSTing a resource, it's the server responsability to provide the uid of the resource.

* **Method**: POST
* **URI**: /api/{resource type}
* **Request Content-type**: application/json
* **Request body**: a JSON object of the resource
* **returns**: the status code 201 if the resource has been created, or an error code (4XX or 5XX). Note that a successful response body will be a JSON object, containing an **id** field that is the unique id that the server gave to the resource.

### DELETE
The DELETE verb is used to remove a resource.

* **Method**: DELETE
* **URI**: /api/{resource type}/{uid}
* **Request Content-type**: application/json
* **Request body**: a JSON object of the resource
* **returns**: the status code 200 if the resource has been deleted, or an error code (4XX or 5XX)


## Errors

In case of an error, the server will send a corresponding HTTP status code: 4xx for the client errors (for example, if the client didn't supply all the parameters required for an action), 5xx for the server error (for example, if the server have not written the data in the store due to a connectivity problem).
Error response body will be in JSON, and will have the following format:

    {
      error: {
                status: {the HTTP status code},
                message: {a generic message},
                details: {some more detailed informations}
             }
    }

Example:

    {
      error: {
               status: 400,
               message: "Bad Request",
               reason: "port must be greater than 0"
             }
    }

## Authentication

A large part of the API requires you to be authenticated. The platform currently provides two sorts of authentication: Cookie-based and OAuth2-based.

### Cookie-based Authentication

In order to get a cookie, you must login into the application by issuing a POST request to the /api/login endpoint with your account email and password.
The response will contain a cookie which you will be able to use in next request as long as the session is open.

### OAuth2-based Authentication

Unlike the cookie-based authentication mechanism, you do not have to login into the platform to access protected resources.
Once you have a token (check the OAuth2 section), you can send request with the token to get authenticated.

For example, you can set the token as request parameter:

    GET http://localhost:8080/api/users/123456789/profile?access_token=0987654321
    Accept: application/json
    Host: localhost:8080

Or by putting it in HTTP header:

    GET http://localhost:8080/api/users/123456789/profile
    Accept: application/json
    Host: localhost:8080
    Authorization: Bearer 0987654321

## API middleware

The API implementation intensively use the notion of 'middleware'.
In the current context, a middleware can be described as a piece of software which intercepts requests and/or responses to do some additional processing.
In the API described below, middleware are used to check authentication, authorization, existence so API responses may be not described in documentation.

For example, most of the API calls will return:

- HTTP 401 Unauthorized - Trying to access a resource without being authenticated
- HTTP 403 Forbidden - Trying to access a resource without being authorized to
- HTTP 404 Not found - The requested resource can not be found

## Detailed API

For a better readability, REST API is split into several files :

* [activity stream](REST_activitystream.md)
* [document store](REST_documentstore.md)
* [company](REST_company.md)
* [domain](REST_domain.md)
* [user](REST_user.md)
* [JWT](REST_jwt.md)

