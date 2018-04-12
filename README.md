# springboot-ngrx-data

SpringBoot with NgRx Data in Angular 5
This project demonstrates the use of SpringBoot with Angular 5 and NgRx Data lib on top of NgRx.
Find the lib here : https://github.com/johnpapa/angular-ngrx-data

## Install

Clone this repository

```bash
git clone https://github.com/aboudard/springboot-ngrx-data
cd springboot-ngrx-data
```

The demo app is based on the Angular CLI. You may want to install the CLI globally if you have not already done so.

```bash
npm install -g @angular/cli
```

Install the npm packages

```bash
cd src/angular
npm install
```

## Runnning

Just run the build (in watch mode if you plan to work on sources)
```bash
ng build --dev --watch
```

Now run the SpringBoot server
```bash
mvn spring-boot:run
or
mvn spring-boot:start
```

## Follow the original instructions about NgRx Data
Check [the original instructions](https://github.com/johnpapa/angular-ngrx-data/blob/master/README.md) about monitoring with Redux Devtools and other details
