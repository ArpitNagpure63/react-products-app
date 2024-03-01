# react-products-app
React app that shows list of products based on user login.

To complete the following task we will be making use of the [dummyJSON](https://dummyjson.com/docs) API, in particular the following will be of use:

* [Login user and get token](https://dummyjson.com/docs/auth#login)
* [Authorizing Resources](https://dummyjson.com/docs#intro-auth)
* [Products API](https://dummyjson.com/docs/products)
* [Limiting Resources](https://dummyjson.com/docs#intro-limit)


## Problem Description

We have been given the following problem to solve:

> We would like to create an app which displays all products we offer to our registered customers however there are a few problems. We do not want unregistered users to view our products as we have security concerns, we only want to show the some of the product information as it is not relevant to the customer. We also have a lot of products so we would like our customers to have the ability to filter and search through our products.

## User Stories

In order to solve the problem we have broken the problem down into a some user stories.

### Login

#### Story

As a registered customer I want to login with my username and password, so that I can access the products.

#### Acceptance Criteria

* A customer cannot view products unless logged in.
* A customer will attempt to login once they click on a login button.
* Once a customer has logged in they should be redirected to the products page.
* A customer can only be logged in for 5 minutes, after which any subsequent request should redirect the user to the login page.

*NB: A fully working authentication feature is not required for this, please refer to the API documentation on how to implement this:*

* [Authorizing Resources](https://dummyjson.com/docs#intro-auth)
* [Login user and get token](https://dummyjson.com/docs/auth#login)

### Products

#### Story

As a logged in customer I want to browse the products, so that I can view further information if interested in that product.

#### Acceptance Criteria

* A customer can only view 10 products at a time.
* A customer can navigate through products 10 at a time by going to next or previous page.
* A customer can only view the `title` and `description` on each product.
* The products `title` & `description` should be displayed as a card.

### Search 

#### Story

As a logged in customer I want to be able to search through the available products, so I can easily find products I am interested in.

#### Acceptance Criteria

* A customer can filter products by `title` only.
* Matching results should be displayed based on whether its a partial or complete match.

## Task 1

Implement the [Login](#login) user story.

## Task 2

Implement the [Products](#products) user story.