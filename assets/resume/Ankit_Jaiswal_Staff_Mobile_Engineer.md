# Ankit Jaiswal

**Staff Mobile Engineer | React Native & iOS Platform Architecture**

+91-8700813145 | ankitjaiswal.cs@gmail.com  
[Portfolio](https://ankitjaiswal1994.github.io/MyPortfolio/) | [GitHub](https://github.com/ankitjaiswal1994/) | [LinkedIn](https://www.linkedin.com/in/ankit-jaiswal-32939782/) | [Stack Overflow](https://stackoverflow.com/users/6441840/ankitjaiswal)

---

## Professional Summary

Staff-level mobile platform engineer with 10 years of experience spanning native iOS and enterprise React Native architecture. Primary architect of Punchh’s white-label mobile platform — loyalty SDK, online ordering module, master app shell, and monorepo ecosystem serving an enterprise multi-brand fleet. Built provisioning and release infrastructure including App Center server, self-hosted CodePush OTA, and end-to-end Fastlane pipelines. Drove fleet-wide framework upgrades through automated merge tooling and established MobileWright E2E automation to replace Appium across the platform.

---

## Core Competencies

**Platform Architecture**  
White-label React Native architecture; monorepo (`punchh-platform-ecosystem`); modular SDK design (RNPC, OLO, menu, payments); TurboModules/codegen; Redux and React Navigation patterns; theme/GRP multi-tenancy; deep linking; GraphQL/REST integration

**Release Engineering & CI/CD**  
Fastlane (Match, TestFlight, Play Store, dSYM/Crashlytics upload); App Store Connect API keys; Firebase App Distribution; CodePush OTA (self-hosted Go server); Bitrise; GitHub Actions; GitHub Packages; certificate and keystore management

**Backend & Tooling**  
Go services (App Center provisioning, CodePush server); Python/FastAPI (upgrade helper, MCP server); Docker; MySQL; Redis; GitHub webhooks and PR automation

**Quality & Native**  
MobileWright/Playwright-native E2E; Page Object Model; shared testID contract across packages; Swift; Objective-C; native bridges; Storybook; Sentry; Bluetooth and payment terminal integrations

---

## Experience

### Punchh Inc. (PAR Technology) — Staff Engineer
**Dec 2021 – Present** | iOS & React Native Platform

Architect and primary owner of Punchh’s white-label mobile platform, release infrastructure, and fleet maintenance tooling.

**Platform Architecture**

- Architected Punchh’s white-label React Native platform spanning `@punchh/react-native-punchh-components` (loyalty SDK), `@punchh/react-native-punchh-olo` (online ordering), and `react-native-master-app` (brand shell), composed via the `punchh-platform-ecosystem` monorepo.
- Designed modular boot and theming (`PunchhProvider`, shared GRP), dual API client strategy (legacy `/api/mobile` and GIS `/api2`), and navigation composition for optional OLO, menu, and gift-card modules per brand.
- Led major framework migrations (React Native 0.73→0.85, React 19, React Navigation 7, Redux 5, CodePush-next) with documented migration paths for downstream brand repositories.
- Reduced bundle size and improved runtime performance of the pickup and OLO ordering framework across the platform.

**Provisioning & Fleet Operations**

- Built **App Center Server** (Go): automated white-label app provisioning — template cloning, brand metadata, Fastlane spec generation, GitHub repository setup, Bitrise build hooks, and worker queue architecture.
- Built **Mobile Framework Upgrade Helper** (Python/FastAPI): automated clone → diff → merge → PR pipeline with conflict-resolution dashboard for fleet-wide SDK upgrades across the brand app fleet.
- Deployed **CodePush Server (Go)** for self-hosted OTA updates; integrated with master app Fastlane lanes for iOS and Android bundle publishing.

**Release Engineering & CI/CD**

> **Mobile Release Pipeline (designed & owned):** Fastlane · App Store Connect API Keys · Firebase App Distribution · CodePush OTA (self-hosted Go server) · Bitrise · GitHub Actions · GitHub Packages · Match/certificate management · TestFlight & Play Store automation

- Designed and owned end-to-end mobile release pipeline: Fastlane lanes for iOS (Match certificates, TestFlight, dSYM/Crashlytics upload) and Android (keystore management, Play Store, Firebase App Distribution).
- Implemented App Store Connect API key authentication for non-interactive CI releases; wired Firebase App Distribution for internal and QA builds.
- Integrated CodePush OTA bundle publishing into release lanes alongside store builds; configured client-side `CodePushServerURL` for the private CodePush server.
- Restored and standardized CI across Bitrise and GitHub Actions after a broken pipeline; aligned Snyk security scanning into the release workflow.

**Quality Engineering**

- Created **react-native-test-automation-suite** (MobileWright branch): MobileWright/Playwright-native E2E framework replacing WebdriverIO/Appium; Page Object Model, brand-matrix test tagging, and shared testID contract with `@punchh` packages.

**Selected Platform Initiatives**

- **app-center-server** — Sole architect · Go, Vue, MySQL, Redis, Bitrise
- **code-push-server-go** — Sole owner · Go, MySQL, Redis, S3
- **mobile-framework-upgrade-helper** — Sole architect · Python, FastAPI, Docker
- **react-native-test-automation-suite** — Sole owner (QA automation) · TypeScript, MobileWright
- **punchh-platform-ecosystem** — Monorepo architect · RN monorepo, `@punchh` packages
- **react-native-master-app, RNPC, OLO framework** — Platform architect · RN 0.85, Fastlane, CodePush

---

### Crownstack Technologies — Team Lead (iOS & React Native)
**Sept 2017 – Dec 2021**

- Led iOS and React Native delivery across client projects; introduced React Native to the organization.
- Improved project architecture and created shared utility libraries adopted company-wide.
- Mentored engineers through structured monthly learning sessions.
- Delivered Sibros monorepo architecture: shared components across mobile and web with per-client theming, Bluetooth integration, and music player modules.

---

### Mobiloitte Technologies — iOS Developer
**Oct 2015 – Sept 2017**

- Built standalone iOS applications in Objective-C for individual client engagements.
- Integrated Bluetooth peripherals and PAX-900 payment terminal hardware into mobile workflows.

---

## Selected Earlier Projects

**Sibros — React Native**  
Monorepo delivering shared components across mobile and web; per-client theming, Bluetooth integration, and music player modules.

**Mindhouse — React Native**  
Meditation and yoga application; introduced architecture based on styled-components, Context API, and TypeScript; revamped ~70% of the app including custom graph components. App Store and Play Store.

**Buildboard — Swift (Project Lead)**  
Cross-platform project lead for web and mobile; Google Vision algorithms, satellite measurement, ACH and Stripe payments, push notification navigation. App Store.

**Jackson Fine Art — Swift**  
“View in Space” room visualization: artwork placement, framing options, wall color customization, and saved room curation. App Store.

---

## Education

**B.Tech in Computer Science & Engineering**  
RKGIT, Ghaziabad | 2011 – 2015
