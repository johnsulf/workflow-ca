# Workflow Course Assignment

This repository is a fork of the Noroff Social Media Client repo for the Workflow Course Assignment

## Description

The goal of the assignment was to use the skills and knowledge from the Workflow course, and improve the quality of an existing package by establishing helpful workflows that make the development process more efficient.

Relevant tools used in the project are:

- Cypress
- Jest
- ESlint
- Prettier
- Husky
- GitHub Actions

## Status

[![Unit Tests](https://github.com/johnsulf/workflow-ca/actions/workflows/unit-test.yml/badge.svg)](https://github.com/johnsulf/workflow-ca/actions/workflows/unit-test.yml)

[![E2E Tests](https://github.com/johnsulf/workflow-ca/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/johnsulf/workflow-ca/actions/workflows/e2e-test.yml)

[![Deploy static content to Pages](https://github.com/johnsulf/workflow-ca/actions/workflows/pages.yml/badge.svg)](https://github.com/johnsulf/workflow-ca/actions/workflows/pages.yml)

## Installation & Running

1. Clone the repo

```bash
git clone https://github.com/johnsulf/workflow-ca.git
```

2. Install the dependencies

```bash
npm install
```

3. Run Build/SASS

```bas
npm run start
```

```bas
npm run build
```

## Testing

Jest Test

```bash
npm run test-unit
```

Cypress Test

```bash
npm run test-e2e
```

Both Cypress & Jest Test

```bash
npm run test
```
