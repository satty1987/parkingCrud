# MaterialUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

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

## Docker Reference

[Docker Reference](https://medium.com/@DenysVuika/your-angular-apps-as-docker-containers-471f570a7f2)ç

`docker login`
According to the docs:

##You need to include the namespace for Docker Hub to associate it with your account.The namespace is the same as your Docker Hub account name.You need to rename the image to YOUR_DOCKERHUB_NAME/docker-whale.So, this means you have to tag your image before pushing:

`docker tag firstimage YOUR_DOCKERHUB_NAME/firstimage`

### and then you should be able to push it.

`docker push YOUR_DOCKERHUB_NAME/firstimage`