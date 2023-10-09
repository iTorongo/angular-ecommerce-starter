# Angular Ecommerce Starter

Angular E-commerce Starter

This application is designed to provide a simple shopping experience with features such as fully responsive home page, navigation menu, products overview, detailed product view, and a shopping cart page.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

## Table of contents

- [Features](#features)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [API endpoint](#api-endpoint)
- [Development server](#development-server)
- [Build](#build)
- [Testing](#testing)
- [Further help](#further-help)

## Features

#### Home page

- A home page with a navigation menu.
- Discover featured products on the home page.
- Collapsable menu for small devices

#### Products page

- High-level overview of all products.
- Search functionality of products and persists the query in the URL.
- Sort products based on various criteria.

#### Product details

- Detailed view of each product for more information.
- Add product to cart functionality.

#### Cart

- Cart page to view and remove items.
- Update cart items asynchronously.

## Getting started

Follow these steps to get the Angular application up and running on your local machine.

### Prerequisites

Ensure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Angular CLI](https://angular.io/cli) (Command Line Interface)

### Installation

**Clone the repository, navigate to the project folder and install the dependencies**

```bash
git clone https://github.com/iTorongo/angular-ecommerce-starter.git
cd angular-ecommerce-starter
npm install
```

## Project structure

This project structure has been followed with the aim of creating a scalable and maintainable codebase

```bash
src/
  app/
    core/
      enums/
      types/
      ...
    features/
      home/
        home.service.ts
        home.module.ts
        ...
      products/
      ...
    layout/
      defaultLayout
      ...
    shared/
      components/
      pipes/
      services/
      shared.module.ts
      ...
    standalone/
      components/
        button/
        icon/
        ...
```

- **features** folder contains code that is related to a specific feature, such as home, products, etc.
- **shared** module contains components, pipes and services that is generic or global, so it can be used across the features.

## API endpoint

Throughout the app we have consumed public api from `https://dummyjson.com/`. The base api has been configured in the `environment/environment.ts` file.

The `cart` api of this public enpdpoint doesn't update in the server while adding or updating carts so we have created a mock api for the usage of `CartService`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Testing

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). To view code coverate run `ng test --no-watch --code-coverage`

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
