# Technical decisions

- \[architecture\] The product is one static web app with no backend, database or sign-in; the greeting text is a constant in the app. *assumed* (F1)
- \[hello-webapp\] The web server answers GET /health with 200 and the plain text "ok", unauthenticated; no separate backend is added for it. *assumed*
- \[hello-webapp\] The page is drawn without the application shell chrome, since the page has no navigation, account or sign-out. *assumed* (F1)