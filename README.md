# BinaryCalculatorUi

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.19.

## Development server

To start a local development server, run:

```bash
ng serve
```
```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Agregar cucumber
Se recomienda para hacer pruebas end-to-end en Angular integrar Cucumber con Cypress mediante un procesador de Gherkin
```bash
npm install --save-dev cypress @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor esbuild
```
Para scripts que arranquen test y aplicación en un solo comando:
```bash
npm install --save-dev start-server-and-test
```

## Ejecutar Cucumber.
En primer lugar es necesario iniciar la aplicación 
```bash
npm run start
```
Podemos ejecutar cypress en modo interactivo:

```bash
npx cypress open
```
- Permite seleccionar que test ejecutar manualmente.
- Se puede ver ejecutar los test paso a paso con animaciones y el navegador abierto
- Util para desarrollo y depuracion. Se puede inspeccionar el DOM, hacer console.log y detener la ejecucion en cualquier paso.
- Soporta time travel. Ver en cada momento el estado del DOM.
- Elegir navegador etc

Podemos ejecutar cypress en modo headless (sin interfaz):

```bash
npx cypress run
```
```bash
npx cypress run --browser chrome
```
- Ejecuta todos los test automáticamente, sin abrir GUI
- Ideal para integración contínua (CI/CD)
- Se puede elegir navegador con --browser (por defecto usa Electron)
- Genera reportes en consola, opcionalmente archivos de video o capturas de pantalla.
- No permite iteracción paso a paso, todo se ejecuta de forma automática