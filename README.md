# AngularProxyConfigApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#proxy.config.json

/api/testget* path says: When I see this path inside my angular 2 application (the path can be stored anywhere) I want to do something with it. The * character indicates that everything which follows the sub-folder will be included. For instance, if you have multiple fonts inside /api/testget, the * will pick up all of them

"target": "http://localhost:1100" for the path above make target url the host/source, therefore in the background we will have http://localhost:1100/api/testget

"pathRewrite": { "^/api/testget": "/api/" }, Now let's say that you want to test your application locally, the http://localhost:1100/api/testget maybe contains in invalid path: /api/testget. You want to change this path to a correct path which is http://localhost:1100/api/, therefore the pathRewrite will become very useful. It will exclude the path in the application(left side) and include the newly written one (right side)

"secure" attribute represents wether we are using http or https. If https is used in the target attribute then set secure attribute to true otherwise set it to false

"changeOrigin": option is only necessary if your host target is not the current environment, for example: localhost. If you want to change the host to www.something.com which would be the target in the proxy then set the changeOrigin attribute to "true":

"logLevel" attribute specifies wether the developer wants to output the proxying on his terminal, therefore he would use the "debug" value as shown on the image

In general the proxy helps you to develop application locally. You set your paths of the files for production purpose and if you have all this files locally inside your project you may just use proxy to access them without changing the path dynamically in your app.
