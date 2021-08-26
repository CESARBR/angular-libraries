# CESARBR Angular Libraries

Angular workspace for multiple libraries in one single repository. This [article](https://kgotgit.medium.com/monorepo-pattern-setting-up-angular-workspace-for-multiple-applications-in-one-single-repository-4e14bc0d0cc0) gives a good idea of how repository is organized.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Libraries list

- [Tooltip](projects/lib-tooltip/README.md)
- [Drag-n-drop](projects/lib-dragndrop/README.md)

## Generating a new library

Run `ng generate library lib-library-name` to generate a new library. Please follow library name standard with the `lib-` prefix for better organization of folders.

Each library has its own README, as examples above. Libraries are published to NPM separately and must use scope `@cesarbr` on package's name as follow: `name:"@cesarbr/library-name"`. Please check it out section [Publishing library to NPM](#publishing-library-to-npm)

For more details take a look at the [Creating libraries guide](https://angular.io/guide/creating-libraries).

## Running your library

In order to run your library isolated from the rest of libraries, we recommend creating an application just for it.

Run `ng g application app-library-name --routing --style=scss` to generate a new app. Please follow application name standard with the `app-` prefix for better organization of folders.

In the new app module, import your library, as example below:

``` typescript
import { LibraryModule } from 'projects/lib-library-name/src/public-api';
...
@NgModule({
  declarations: [...],
  imports: [
    LibraryModule,
    // other modules
  ],
```

Use the library as you like and then update the package.json to add a start command just for the new app (note: choose a port not used yet):

``` json
"start:app-library-name": "ng serve --project=app-library-name --port 4100"
```
Now you can start your application and test if your library is working by executing below command:

``` shell
num run start:app-library-name
```

## Publishing library to NPM

For manually publishing library to NPM, first check if you have been added to [cesarbr organization](https://www.npmjs.com/org/cesarbr) in NPM. Then login with your credentials:  
``` shell
npm login
```

Build the library and go to `dist` folder:
``` shell
ng build lib-library-name
cd dist/lib-library-name
```

Since packages are scoped, use `--access public` option:
``` shell
npm publish --access public
```

Note: Automatic publish w/Github Actions is under development.