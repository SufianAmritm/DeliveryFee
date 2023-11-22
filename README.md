```
DeliveryFee
├─ app.js
├─ common
│  ├─ constants
│  │  └─ validation-constants.js
│  ├─ errors
│  │  ├─ custom-error.js
│  │  └─ service-data-error.js
│  └─ utils
│     ├─ data-existence.js
│     ├─ days-switch.js
│     ├─ services
│     │  ├─ delete-service.js
│     │  ├─ get-service.js
│     │  ├─ insert-service.js
│     │  ├─ report-service.js
│     │  └─ update-service.js
│     └─ validation-handler.js
├─ db
│  ├─ knex-file.js
│  ├─ migrations
│  │  └─ 20231113124300_knex_mig.js
│  ├─ postgre-db.js
│  └─ transactions
│     ├─ delete-transaction.js
│     ├─ get-transaction.js
│     ├─ insert-transaction.js
│     ├─ report-transaction.js
│     └─ update-transaction.js
├─ package-lock.json
├─ package.json
├─ README.md
└─ src
   ├─ controllers
   │  ├─ city.js
   │  ├─ delivery-fee-values.js
   │  ├─ delivery-fee.js
   │  ├─ fee-exemption.js
   │  ├─ seller.js
   │  └─ zone.js
   ├─ dto
   │  ├─ city-dto.js
   │  ├─ delivery-fee-dto.js
   │  ├─ delivery-fee-values-dto.js
   │  ├─ fee-exemption-dto.js
   │  ├─ seller-dto.js
   │  └─ zone-dto.js
   ├─ middleware
   │  ├─ error-handler.js
   │  └─ not-found.js
   ├─ routes
   │  ├─ city-routes.js
   │  ├─ delivery-fee-routes.js
   │  ├─ delivery-fee-values-routes.js
   │  ├─ fee-exemption-routes.js
   │  ├─ main-routes.js
   │  ├─ seller-routes.js
   │  └─ zone-routes.js
   ├─ services
   │  ├─ city-service.js
   │  ├─ delivery-fee-service.js
   │  ├─ delivery-fee-values-service.js
   │  ├─ fee-exemption-service.js
   │  ├─ seller-service.js
   │  └─ zone-service.js
   └─ validator
      ├─ validation
      │  ├─ city-validate.js
      │  ├─ delivery-fee-validate.js
      │  ├─ delivery-fee-values-validate.js
      │  ├─ fee-exemption-validate.js
      │  ├─ seller-validate.js
      │  └─ zone-validate.js
      └─ ValidationHandlers
         ├─ city-validation-handler.js
         ├─ delivery-fee-validation-handler.js
         ├─ delivery-fee-values-validation-handler
         ├─ fee-exemption-validation-handler.js
         ├─ seller-validation-handler.js
         └─ zone-validation-handler.js

```
