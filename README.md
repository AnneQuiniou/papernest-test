![image](./public/favicon.ico)

# Papernest Technical Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

This SPA is intended as a demo implementing of multiple Angular features (components, services, directives, etc),
RxJs features (Observable, BehaviorSubject, pipe, switchMap, etc), libraries, etc.

## Set up

Please run `npm install` to install required packages.

## Useful commands

Run `ng serve` for a development server available on `http://localhost:4200/`.

Please note the `ng serve` & `ng build` command are configured to provide the application in the **fr locale**.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Choices made

### General principles

I'm roughly following [atomic design principles](https://atomicdesign.bradfrost.com/chapter-2/) for the folder organization.

Pages and templates have their own folder, 'dumb' components are in the ui folder and I created folders for ensembles that made sense to me: menu, counter elements, etc.

### Angular Material

Does such a small app need Angular Material ? Generally, no: Angular Material is a pretty heavy library to import compared to the size of the project.

I chose to install Material and use the theme & components mainly to show I know the library and can use it.

### I18n

As Papernest is already present in Spain and France, I'm making an educated guess that localization is a subject for all current apps.
I decided to include the Angular i18n-related packages & implement them.
The app has English as a source language but has a French localization package applied.
