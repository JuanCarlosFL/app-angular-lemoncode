
ng new app-angular-lemoncode

ng add @angular/material

ng g m shared --module app

ng g m shared/material --module shared

ng g interface shared/models/user

ng g module private --routing --module app

ng g c private

ng g c private/components/private-nav-bar

ng generate service shared/Auth/auth


