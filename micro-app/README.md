# MicroApp

Esta aplicacion esta construida con el framework [Angular CLI](https://github.com/angular/angular-cli) version 9.1.14,
Opera como una aplicacion microfront y su funcionalidad es representar graficos estadisticos.

## Pre-requisitos

Es necesario contar con la verison npm@6 para la instalcion de sus dependencias luego de ello ejecutar el comando `npm install`

## Dependencias

- Para la representacion de [Graficos] (https://apexcharts.com/docs/angular-charts/)
- Para el proceso de compilacion [Utilitario] (https://github.com/manfredsteyer/ngx-build-plus)

## Iniciar aplicacion

Ejecutar el comando `npm run start` para levantar el servidor localmente en modo standalone (no integrado con la aplicacion shell), seguidamente ingresar a `http://localhost:4202/`.

## Build

Para generar una version compilada de la aplicacion se debe ejecutar el comando `npm run build:local` dicho comando generar una version estable y la disponibilizara en la aplicacion shell en la siguiente ruta 'legacy-app/src/asses/microfronts/'
