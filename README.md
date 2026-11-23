<div align="center">

# Zosh POS — SaaS Point of Sale & Retail Operations Platform

**A multi-role retail management platform for stores, branches, cashiers, inventory, sales, and subscriptions.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Open%20Application-0A66C2?style=for-the-badge)](https://pos-system-saas.vercel.app/)

[Open the deployed application](https://pos-system-saas.vercel.app/)

</div>

---

## Overview

Zosh POS is a full-stack Point of Sale (POS) and retail operations application built with **React** on the frontend and **Java Spring Boot** on the backend. The codebase is organized as two applications:

- **`pos-frontend/`** — React single-page application with role-based dashboards, Redux Toolkit state management, API integration, and responsive UI components.
- **`pos-backend/`** — Spring Boot REST API with Spring Security, JWT authentication, JPA/Hibernate persistence, MySQL, email support, and payment-provider integrations.

The application is designed around multiple stores and branches. Different user roles receive separate workflows for store administration, branch operations, cashier checkout, and platform-level administration.

> **Deployment note:** The frontend demo is deployed at the link above. The source archive currently contains a placeholder API URL (`YOUR_BACKEND_URL`) in `pos-frontend/.env.production`; configure the real backend URL in the Vercel project before expecting live API operations to work. The deployed frontend URL alone does not prove that a backend or payment integration is currently online.

## Live application

| Resource | Link |
|---|---|
| Deployed frontend | [https://pos-system-saas.vercel.app/](https://pos-system-saas.vercel.app/) |
| Vercel environment-variable guide | [Vercel documentation](https://vercel.com/docs/environment-variables) |

---

## Product capabilities

The following capabilities are represented in the supplied source code and UI structure. Actual availability in a deployed environment depends on backend configuration, database state, provider credentials, and deployment settings.

### 1. Store administration

- Store dashboard with sales and operational summaries
- Store profile and contact information
- Branch management
- Product and category management
- Employee management
- Store-level reports and sales views
- Alerts for low-stock products and operational conditions
- Store settings and subscription upgrade screens

Relevant frontend areas:
- [`StoreRoutes.jsx`](pos-frontend/src/routes/StoreRoutes.jsx)
- [`store/`](pos-frontend/src/pages/store/)
- [`store/Dashboard/`](pos-frontend/src/pages/store/Dashboard/)

### 2. Branch management

- Branch dashboard and sales overview
- Branch orders and transactions
- Inventory visibility and management
- Employee management
- Customer views
- Refund workflows
- Branch reports and settings

Relevant frontend areas:
- [`BranchManagerRoutes.jsx`](pos-frontend/src/routes/BranchManagerRoutes.jsx)
- [`Branch Manager/`](pos-frontend/src/pages/Branch%20Manager/)

### 3. Cashier / POS terminal

- Product search and product selection
- Cart and quantity management
- Customer lookup and customer details
- Payment workflow and discounts
- Held orders
- Order history and order details
- Returns and refunds
- Shift summary and receipt generation

Relevant frontend areas:
- [`CashierRoutes.jsx`](pos-frontend/src/routes/CashierRoutes.jsx)
- [`cashier/`](pos-frontend/src/pages/cashier/)

### 4. Platform super administrator

- Platform dashboard
- Store listing and store detail views
- Store approval requests
- Subscription-plan management
- Settings and administrative controls
- Export-related UI

Relevant frontend areas:
- [`SuperAdminRoutes.jsx`](pos-frontend/src/routes/SuperAdminRoutes.jsx)
- [`SuperAdminDashboard/`](pos-frontend/src/pages/SuperAdminDashboard/)

### 5. Authentication and onboarding

- Login page
- Store onboarding flow
- Password-reset screen
- JWT-based authenticated API requests
- Role-based route selection

Relevant files:
- [`App.jsx`](pos-frontend/src/App.jsx)
- [`AuthRoutes.jsx`](pos-frontend/src/routes/AuthRoutes.jsx)
- [`api.js`](pos-frontend/src/utils/api.js)
- [`JwtProvider.java`](pos-backend/src/main/java/com/zosh/configrations/JwtProvider.java)
- [`JwtValidator.java`](pos-backend/src/main/java/com/zosh/configrations/JwtValidator.java)

### 6. Backend business modules

The backend contains controllers and service/repository layers for:

| Module | Controller |
|---|---|
| Authentication | [`AuthController.java`](pos-backend/src/main/java/com/zosh/controller/AuthController.java) |
| Stores | [`StoreController.java`](pos-backend/src/main/java/com/zosh/controller/StoreController.java) |
| Branches | [`BranchController.java`](pos-backend/src/main/java/com/zosh/controller/BranchController.java) |
| Products | [`ProductController.java`](pos-backend/src/main/java/com/zosh/controller/ProductController.java) |
| Categories | [`CategoryController.java`](pos-backend/src/main/java/com/zosh/controller/CategoryController.java) |
| Inventory | [`InventoryController.java`](pos-backend/src/main/java/com/zosh/controller/InventoryController.java) |
| Customers | [`CustomerController.java`](pos-backend/src/main/java/com/zosh/controller/CustomerController.java) |
| Employees | [`EmployeeController.java`](pos-backend/src/main/java/com/zosh/controller/EmployeeController.java) |
| Orders | [`OrderController.java`](pos-backend/src/main/java/com/zosh/controller/OrderController.java) |
| Refunds | [`RefundController.java`](pos-backend/src/main/java/com/zosh/controller/RefundController.java) |
| Shift reports | [`ShiftReportController.java`](pos-backend/src/main/java/com/zosh/controller/ShiftReportController.java) |
| Payments | [`PaymentController.java`](pos-backend/src/main/java/com/zosh/controller/PaymentController.java) |
| Subscriptions | [`SubscriptionController.java`](pos-backend/src/main/java/com/zosh/controller/SubscriptionController.java) |
| Subscription plans | [`SubscriptionPlanController.java`](pos-backend/src/main/java/com/zosh/controller/SubscriptionPlanController.java) |
| Store analytics | [`StoreAnalyticsController.java`](pos-backend/src/main/java/com/zosh/controller/StoreAnalyticsController.java) |
| Branch analytics | [`BranchAnalyticsController.java`](pos-backend/src/main/java/com/zosh/controller/BranchAnalyticsController.java) |
| Super-admin dashboard | [`AdminDashboardController.java`](pos-backend/src/main/java/com/zosh/controller/AdminDashboardController.java) |

---

## Technology stack

| Layer | Technologies |
|---|---|
| Frontend | React 19, Vite 7, JavaScript |
| UI | Tailwind CSS, shadcn/ui-style components, Radix UI, Lucide React |
| State management | Redux Toolkit, React Redux |
| Routing | React Router |
| HTTP/API | Axios |
| Forms and validation | Formik, React Hook Form, Yup, Zod, React Hook Form resolvers |
| Backend | Java 17, Spring Boot 3.5.3 |
| Security | Spring Security, JWT, BCrypt password encoder |
| Persistence | Spring Data JPA, Hibernate |
| Database | MySQL |
| Payments | Razorpay Java SDK, Stripe Java SDK |
| Media uploads | Cloudinary unsigned upload preset |
| Email | Spring Boot Mail / SMTP |
| Build tools | pnpm, Maven Wrapper |
| Deployment | Vercel frontend; backend deployment requires a separately configured Java hosting target |

Technology references:
- [React documentation](https://react.dev/learn)
- [Vite documentation](https://vite.dev/guide/)
- [Redux Toolkit documentation](https://redux-toolkit.js.org/introduction/getting-started)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Spring Security reference](https://docs.spring.io/spring-security/reference/6.5/)
- [MySQL documentation](https://dev.mysql.com/doc/)
- [Maven guides](https://maven.apache.org/guides/)
- [Razorpay documentation](https://razorpay.com/docs/home)
- [Stripe documentation](https://docs.stripe.com/)
- [Cloudinary documentation](https://cloudinary.com/documentation)

---

## Repository structure

Keep the two applications directly under the repository root:

```text
pos-system-saas/
├── README.md
├── .gitignore
├── pos-frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── Redux Toolkit/
│   │   ├── routes/
│   │   └── utils/
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── vite.config.js
│   └── vercel.json
└── pos-backend/
    ├── src/
    │   ├── main/
    │   │   ├── java/com/zosh/
    │   │   │   ├── configrations/
    │   │   │   ├── controller/
    │   │   │   ├── domain/
    │   │   │   ├── exception/
    │   │   │   ├── mapper/
    │   │   │   ├── modal/
    │   │   │   ├── payload/
    │   │   │   ├── repository/
    │   │   │   ├── service/
    │   │   │   └── util/
    │   │   └── resources/
    │   │       ├── application.yml
    │   │       └── docker-compose.yml
    │   └── test/
    ├── .mvn/
    ├── mvnw
    ├── mvnw.cmd
    ├── Dockerfile
    └── pom.xml
```

Useful entry points:
- Frontend dependencies and scripts: [`package.json`](pos-frontend/package.json)
- Frontend API client: [`api.js`](pos-frontend/src/utils/api.js)
- Frontend role routing: [`App.jsx`](pos-frontend/src/App.jsx)
- Backend dependencies and Java version: [`pom.xml`](pos-backend/pom.xml)
- Backend configuration: [`application.yml`](pos-backend/src/main/resources/application.yml)
- Backend security configuration: [`SecurityConfig.java`](pos-backend/src/main/java/com/zosh/configrations/SecurityConfig.java)
- Backend container build: [`Dockerfile`](pos-backend/Dockerfile)

---

## Getting started locally

### Prerequisites

Install the following before running the project:

- Java 17
- MySQL 8.x
- Node.js (LTS)
- pnpm
- Git

Check versions:

```bash
java -version
node -v
pnpm -v
mysql --version
```

### 1. Clone the repository

After creating the GitHub repository named **`pos-system-saas`**:

```bash
git clone https://github.com/<your-github-username>/pos-system-saas.git
cd pos-system-saas
```

The clone URL above is a template until the repository is created.

### 2. Configure the database

Create a MySQL database, for example:

```sql
CREATE DATABASE pos_db;
```

Set the backend environment variables in the same terminal session used to run Spring Boot:

```bash
export DB_URL="jdbc:mysql://localhost:3306/pos_db"
export DB_USERNAME="your_mysql_username"
export DB_PASSWORD="your_mysql_password"
```

### 3. Configure the backend environment

The backend reads database and mail credentials from environment variables in [`application.yml`](pos-backend/src/main/resources/application.yml).

```bash
export MAIL_USERNAME="your_email_address"
export MAIL_PASSWORD="your_email_app_password"
export JWT_SECRET="replace_with_a_random_secret_of_at_least_32_bytes"

export RAZORPAY_KEY_ID="your_razorpay_key_id"
export RAZORPAY_KEY_SECRET="your_razorpay_key_secret"
export STRIPE_SECRET_KEY="your_stripe_secret_key"

export FRONTEND_RESET_URL="https://pos-system-saas.vercel.app/auth/reset-password?token="
export PORT="8080"
```

Do not commit real values. Store production secrets in your backend hosting provider's secret/environment-variable settings.

**Configuration work required in the current source:**
- `application.yml` currently has placeholder payment values (`test_key`, `test_secret`, and `test_stripe`). Wire the three payment environment variables above into those properties before enabling real payments.
- [`JwtConstant.java`](pos-backend/src/main/java/com/zosh/configrations/JwtConstant.java) currently contains the placeholder `YOUR_OWN_KEY`. Update the JWT implementation to load the same strong `JWT_SECRET` from the environment. Use a sufficiently long random key (at least 32 bytes for HS256) and keep the provider and validator on the same key.
- [`SecurityConfig.java`](pos-backend/src/main/java/com/zosh/configrations/SecurityConfig.java) currently contains a placeholder CORS origin. Replace it with the exact deployed frontend origin: `https://pos-system-saas.vercel.app`.
- [`PaymentServiceImpl.java`](pos-backend/src/main/java/com/zosh/service/impl/PaymentServiceImpl.java) contains localhost payment success/cancel callback URLs. Replace them with environment-driven URLs before using live payment providers.
- The supplied JPA setting is `ddl-auto: create`. This can recreate schema objects at application startup and may destroy existing data. Do not use it against a database containing data you need. Use a controlled migration strategy for production (for example, Flyway/Liquibase with Hibernate validation).

### 4. Run the backend

From the repository root:

```bash
cd pos-backend
chmod +x mvnw
./mvnw spring-boot:run
```

The backend uses port `8080` by default, or the value supplied through `PORT`.

Build a JAR:

```bash
./mvnw clean package
```

### 5. Configure and run the frontend

The frontend API client reads `VITE_API_BASE_URL` from Vite environment variables. The archive's `.env.production` currently contains a placeholder, not a real backend URL.

For local development, create `pos-frontend/.env.local`:

```env
VITE_API_BASE_URL=http://localhost:8080
```

Then run:

```bash
cd pos-frontend
pnpm install
pnpm dev
```

Open the local Vite URL printed in the terminal (normally `http://localhost:5173`).

Useful frontend commands:

```bash
pnpm dev
pnpm build
pnpm preview
pnpm lint
```

The package defines `dev`, `build`, `preview`, and `lint`; it does **not** define an `npm start` script.

### 6. Configure Vercel

In the Vercel project settings:

1. Open **Settings → Environment Variables**.
2. Add `VITE_API_BASE_URL`.
3. Set its value to the public backend API base URL (for example, `https://your-backend-host.example.com`).
4. Apply it to the relevant environments.
5. Redeploy the frontend.

Vite exposes variables prefixed with `VITE_` to browser code. Never put database passwords, JWT signing secrets, SMTP passwords, Stripe secret keys, or Razorpay secret keys in a `VITE_` variable.

Guide: [Vercel environment variables](https://vercel.com/docs/environment-variables).

---

## Environment variable reference

| Variable | Used by | Purpose | Secret? |
|---|---|---|---|
| `VITE_API_BASE_URL` | Frontend | Backend API base URL | No |
| `DB_URL` | Backend | JDBC connection URL | Usually non-secret; may reveal infrastructure |
| `DB_USERNAME` | Backend | Database account | Yes / sensitive |
| `DB_PASSWORD` | Backend | Database password | **Yes** |
| `MAIL_USERNAME` | Backend | SMTP account | Sensitive |
| `MAIL_PASSWORD` | Backend | SMTP app password | **Yes** |
| `JWT_SECRET` | Backend | JWT signing and verification | **Yes** |
| `RAZORPAY_KEY_ID` | Backend | Razorpay API key ID | Treat as sensitive configuration |
| `RAZORPAY_KEY_SECRET` | Backend | Razorpay API secret | **Yes** |
| `STRIPE_SECRET_KEY` | Backend | Stripe server-side secret key | **Yes** |
| `FRONTEND_RESET_URL` | Backend | Password-reset frontend URL | No |
| `PORT` | Backend host | HTTP port | No |

Only public frontend configuration should use the `VITE_` prefix. Secrets belong on the backend.

---

## Security audit and remediation

The following items were identified by inspecting the supplied ZIP archive. This is a source snapshot review; it does not inspect your GitHub commit history, live hosting settings, database, or provider dashboards.

### 1. Gmail App Password in a commented configuration block — revoke it

**File:** [`application.yml`](pos-backend/src/main/resources/application.yml)

A legacy commented-out SMTP configuration contains a value formatted like a Gmail App Password. A commented line is still committed text and is not safe to publish.

Actions:

1. Open [Google App Passwords](https://myaccount.google.com/apppasswords).
2. Revoke the app password associated with this application.
3. If it is no longer needed, leave it revoked. If email sending still requires it, generate a new one only after removing the old value from source.
4. Delete the entire obsolete commented SMTP configuration block from `application.yml`.
5. Keep only environment-variable references for mail credentials:

```yaml
spring:
  mail:
    username: ${MAIL_USERNAME}
    password: ${MAIL_PASSWORD}
```

Google's instructions: [Remove App Passwords](https://support.google.com/accounts/answer/185833).

If this credential was ever pushed to a public repository, revoke it first. Then assess whether Git history needs rewriting. Simply deleting the line in a new commit does not erase the old commit.

### 2. JWT signing key is a placeholder

**File:** [`JwtConstant.java`](pos-backend/src/main/java/com/zosh/configrations/JwtConstant.java)

The current value is `YOUR_OWN_KEY`, which is a placeholder rather than a production signing secret. Replace the hard-coded value with environment-backed configuration and ensure both [`JwtProvider.java`](pos-backend/src/main/java/com/zosh/configrations/JwtProvider.java) and [`JwtValidator.java`](pos-backend/src/main/java/com/zosh/configrations/JwtValidator.java) use the same key. Generate a strong random secret of at least 32 bytes for HS256. Never expose it in frontend code.

### 3. SSH-key-named files in the frontend directory

The archive contains these unusual files:

- `pos-frontend/Enter passphrase (empty for no passphrase):`
- `pos-frontend/Enter passphrase (empty for no passphrase):.pub`

The private-key-named file contains placeholder text rather than a valid OpenSSH private key, but neither file belongs in the application repository. Delete both:

```bash
rm -f "pos-frontend/Enter passphrase (empty for no passphrase):"
rm -f "pos-frontend/Enter passphrase (empty for no passphrase):.pub"
```

If you separately generated a real SSH private key and exposed it elsewhere, revoke/remove its public key from the services where it was registered and generate a new key pair.

### 4. Local Docker Compose credentials

**File:** [`docker-compose.yml`](pos-backend/src/main/resources/docker-compose.yml)

The local MySQL example uses `root` / `root`. Treat these as local-only sample values, not production credentials. For shared or production environments, use a dedicated least-privilege database user and inject credentials through an untracked `.env` file or deployment secrets.

### 5. Payment-provider configuration

**Files:**
- [`application.yml`](pos-backend/src/main/resources/application.yml)
- [`PaymentServiceImpl.java`](pos-backend/src/main/java/com/zosh/service/impl/PaymentServiceImpl.java)

The active payment properties are placeholders, not usable live credentials. Configure the backend-only variables `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, and `STRIPE_SECRET_KEY`. If real provider keys were ever committed, rotate them in the provider dashboards:

- [Razorpay documentation and account](https://razorpay.com/docs/home)
- [Stripe dashboard](https://dashboard.stripe.com/apikeys)

Do not put provider secret keys in frontend environment variables or JavaScript.

### 6. Cloudinary upload configuration

**File:** [`uploadToCloudinary.js`](pos-frontend/src/utils/uploadToCloudinary.js)

The Cloudinary cloud name and unsigned upload preset are visible in browser code. These values are not equivalent to a private API secret, but an unrestricted unsigned preset can be abused. Restrict the preset by upload type, file size, allowed formats, and any available upload controls. Never add a Cloudinary API secret to frontend code.

### 7. Frontend API URL is a placeholder

**File:** `pos-frontend/.env.production`

The current value is `YOUR_BACKEND_URL`. Replace it with the deployed backend URL through Vercel's `VITE_API_BASE_URL` environment variable, then redeploy. Do not assume the live frontend can call the backend until this is configured and tested.

### 8. Additional production-readiness checks

Before using real stores or payments, review these items:

- In [`SecurityConfig.java`](pos-backend/src/main/java/com/zosh/configrations/SecurityConfig.java), the broad `/api/**` authenticated matcher appears before the more specific `/api/super-admin/**` role matcher. Spring Security uses the first matching authorization rule, so reorder and test the specific super-admin rule before the broad rule.
- Replace the CORS placeholder in `SecurityConfig.java` with the exact frontend origin; do not allow every origin in production.
- Replace hard-coded localhost payment callback URLs in `PaymentServiceImpl.java` with configured production URLs.
- Replace `ddl-auto: create` with a controlled schema migration strategy before connecting to persistent production data.
- Test JWT expiry, invalid-token handling, role boundaries, password reset, payment callbacks, refunds, and authorization for every role.
- Verify that the production database is backed up and that secrets are stored only in backend hosting settings.

### Removing an already-pushed secret from Git history

First **revoke or rotate the credential**. Then, if the credential was pushed to GitHub, follow GitHub's official guide for removing sensitive data from repository history:

[GitHub Docs — Removing sensitive data from a repository](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)

History rewriting changes commit IDs and can affect collaborators and branches. Do not blindly force-push a rewritten history without backing up the repository and coordinating all clones.

---

## Repository hygiene

The root `.gitignore` supplied with this documentation ignores:

- Maven `target/` and Java build output
- Node `node_modules/`, Vite `dist/`, and local caches
- `.env` files (while allowing `.env.example`)
- IDE and operating-system files
- Logs, temporary files, private keys, and local credentials

Remove already-existing generated files before committing; `.gitignore` does not untrack files that Git already tracks.

From the repository root, clean the archive's generated and macOS metadata:

```bash
find . -type d \( -name target -o -name node_modules -o -name dist -o -name __MACOSX -o -name .idea -o -name .settings \) -prune -exec rm -rf {} +

find . -type f \( -name ".DS_Store" -o -name "*.class" -o -name "*.iml" -o -name ".classpath" -o -name ".project" \) -delete

rm -f "pos-frontend/Enter passphrase (empty for no passphrase):"
rm -f "pos-frontend/Enter passphrase (empty for no passphrase):.pub"

find pos-backend -type f -name mvnw -exec chmod +x {} \;
```

Before committing:

```bash
git status --short
git diff --cached
```

Consider enabling GitHub secret scanning and push protection where available.

---

## Roadmap ideas

Potential next engineering improvements:

- Replace schema auto-creation with Flyway or Liquibase migrations.
- Move JWT secret handling to Spring-managed configuration and rotate keys safely.
- Centralize frontend/backend API contracts and document endpoints with OpenAPI/Swagger.
- Add automated tests for authentication, authorization, orders, refunds, and payment callbacks.
- Add integration tests using Testcontainers for MySQL.
- Move payment callback URLs and CORS origins into environment configuration.
- Add structured logging, health checks, and monitoring.
- Add CI workflows for frontend lint/build and backend Maven tests.
- Add database backup/restore procedures and deployment runbooks.

---

## License

No explicit project license was identified in the supplied archive. Unless you add a license file, do not assume others have permission to reuse, modify, or redistribute the source. See [Choose an open-source license](https://choosealicense.com/).

---

<div align="center">

**Built with React, Spring Boot, and MySQL.**

[Live Demo](https://pos-system-saas.vercel.app/) · [React Docs](https://react.dev/learn) · [Spring Boot Docs](https://spring.io/projects/spring-boot)

</div>
