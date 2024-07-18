# AngularTesting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## How to user tables in Angular

Use this official link below to implment the table feature in the angular
https://material.angular.io/guide/getting-started

1. run : ng add @angular/material
<table mat-table [dataSource]="dataSource">
   <ng-container matColumnDef="position">
     <th mat-header-cell *matHeaderCellDef> No. </th>
     <td mat-cell *matCellDef="let element"> {{element.position}} </td>
   </ng-container>
   <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
   <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
 </table>
