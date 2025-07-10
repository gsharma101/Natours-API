# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.1.0] - 2025-07-09
### Added
- Added ESLint and Prettier for code quality and formatting
- Added Airbnb ESLint config and plugins for better code style
- Added `engines` field to specify Node.js version >=18.0.0
- Added debug script using `ndb` for easier debugging

### Changed
- Upgraded project to use `express@5.1.0`
- Upgraded to latest versions of `mongoose`, `morgan`, `slugify`, `nodemon`, etc.

### Removed ⚠ Outdated / better alternatives / maintenance mode:

| Package                  | Old Version      | New / Recommended Version | Notes                                      |
|-------------------------|------------------|-------------------------|---------------------------------------------|
| @babel/polyfill        | ^7.4.4           | Removed                 | Deprecated, replaced by `core-js` + `regenerator-runtime` |
| body-parser            | ^1.19.0          | Removed                 | Use built-in `express.json()` and `express.urlencoded()` |
| parcel-bundler         | ^1.12.3          | parcel@^2.x             | Upgrade to Parcel v2 (better performance & support) |
| eslint                 | ^5.16.0          | ^9.x                    | Upgrade to latest ESLint                   |
| eslint-config-airbnb   | ^17.1.0          | ^19.x                   | Upgrade to latest AirBnB config            |
| eslint-plugin-import   | ^2.17.2          | ^2.32.x                 | Upgrade to latest                          |
| eslint-plugin-jsx-a11y | ^6.2.1           | ^6.7.x                  | Upgrade to latest                          |
| eslint-plugin-node     | ^8.0.1           | ^11.x                   | Upgrade to latest                          |
| eslint-plugin-prettier | ^3.0.1           | ^5.5.x                  | Upgrade to latest                          |
| eslint-plugin-react    | ^7.12.4          | ^7.37.x                 | Upgrade to latest                          |
| prettier               | ^1.17.0          | ^3.x                    | Upgrade to latest                          |
| helmet                 | ^3.16.0          | ^7.x                    | Upgrade to latest                          |
| express-rate-limit     | ^3.5.0           | ^7.x                    | Upgrade to latest                          |
| dotenv                 | ^7.0.0           | ^16.x                   | Upgrade to latest                          |
| mongoose               | ^5.5.2           | ^8.x                    | Upgrade to latest                          |
| stripe                 | ^7.0.0           | ^14.x                   | Upgrade to latest                          |
| nodemailer             | ^6.1.1           | ^6.9.x                  | Upgrade to latest                          |

**Also:**
- Updated Node.js engine requirement from `^10` → `>=18.0.0` (LTS)


## [1.0.0] - Jul 12, 2019
### Added
- Initial project setup with Node.js, Express, MongoDB
- Basic CRUD APIs
- Tour routes and controllers
- Environment variable management with dotenv
- Logging with morgan
- Slug generation for URLs
