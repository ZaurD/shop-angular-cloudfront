// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Config } from './config.interface';

export const environment: Config = {
  production: false,
  apiEndpoints: {
    product: 'https://pj8ox14gw2.execute-api.eu-west-1.amazonaws.com/dev/',
    order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    import: 'https://al3urtk180.execute-api.eu-west-1.amazonaws.com/dev',
    cart: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    //Implement a Product model on FE side as a joined model of product and stock by productId.
    //BE: Separate tables in DynamoDB
    //FE: One product model as a result of BE models join (product and it's stock)
    bff: 'https://pj8ox14gw2.execute-api.eu-west-1.amazonaws.com/dev/',
  },
  apiEndpointsEnabled: {
    product: true,
    order: false,
    import: true,
    bff: true,
    cart: false,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
