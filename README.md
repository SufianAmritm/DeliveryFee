
```
DeliveryFee
├─ app.js
├─ common
│  ├─ constants
│  │  └─ validation-constants.js
│  ├─ errors
│  │  ├─ bad-request.js
│  │  ├─ custom-api.js
│  │  ├─ index.js
│  │  └─ transaction-error.js
│  └─ utils
│     ├─ data-existence.js
│     └─ services
│        ├─ delete-service.js
│        ├─ get-service.js
│        ├─ insert-service.js
│        └─ update-service.js
├─ db
│  ├─ knex-file.js
│  ├─ migrations
│  │  └─ 20231113124300_knex_mig.js
│  ├─ postgre-db.js
│  └─ transactions
│     ├─ delete-transaction.js
│     ├─ get-transaction.js
│     ├─ insert-transaction.js
│     └─ update-transaction.js
├─ package-lock.json
├─ package.json
├─ README.md
└─ src
   ├─ controllers
   │  ├─ city.js
   │  ├─ delivery-fee.js
   │  ├─ seller.js
   │  └─ zone.js
   ├─ dto
   │  ├─ city-dto.js
   │  ├─ delivery-fee-dto.js
   │  ├─ seller-dto.js
   │  └─ zone-dto.js
   ├─ middleware
   │  ├─ error-handler.js
   │  └─ not-found.js
   ├─ routes
   │  ├─ city-routes.js
   │  ├─ delivery-fee-routes.js
   │  ├─ main-routes.js
   │  ├─ seller-routes.js
   │  └─ zone-routes.js
   ├─ services
   │  ├─ city-service.js
   │  ├─ delivery-fee-service.js
   │  ├─ seller-service.js
   │  └─ zone-service.js
   └─ validator
      └─ ValidationHandlers
         ├─ city-validation-handler.js
         ├─ delivery-fee-validation-handler.js
         ├─ seller-validation-handler.js
         └─ zone-validation-handler.js

```