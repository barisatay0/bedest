## 🚀 What does this PR do?
[Explain the purpose of this PR. E.g., Added a new Redis cache service, fixed the RLS bypass bug in ServiceBaseTenant, etc.]

## 🔗 Related Issue
Fixes #

## 🛠 Type of Change
- [ ] 🐞 Bug Fix (non-breaking change which fixes an issue)
- [ ] ✨ New Feature (non-breaking change which adds functionality)
- [ ] ♻️ Refactoring (Code quality improvement, no new feature)
- [ ] 📖 Documentation Update

## 🏛️ Bedest Architecture Checklist (Critical)
- [ ] **Multi-tenancy:** If a new tenant-specific table was added, the service extends `ServiceBaseTenant` instead of `ServiceBase`.
- [ ] **Transaction & Scope:** Database operations are wrapped in the correct scope (`UtilDb.tenantScope` or `UtilDb.systemScope` when necessary).
- [ ] **Strict Typing:** No `any` types were used. Drizzle's `InferInsertModel` and `InferSelectModel` are utilized correctly.
- [ ] **Schema Standards:** `SchemaHelper.activeIndex` and `SchemaHelper.tenantIsolationPolicy` are included for new tables where applicable.

## 🧪 Testing
- [ ] Ran `bun test` and all existing tests (Auth, User, Tenant, etc.) passed successfully.
- [ ] Added new test cases for the specific feature or bug fix.

## 📋 Extra Checks
- [ ] Code follows the existing formatting and linting rules.
- [ ] Updated `.env.example` with any new environment variables required.
