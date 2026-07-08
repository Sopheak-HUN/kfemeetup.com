# Contributing Guidelines

Welcome to the project! This document outlines our CI/CD workflow and branching strategy. Please read this carefully to understand how to contribute effectively and maintain a clean commit history.

## CI/CD Workflow & Branching Strategy

Our development process uses a forked repository model. There is an Origin Repository (upstream) and your Remote Repository (fork). 

### 1. Origin Repository (Upstream)
The origin repository contains the main branches that map to our deployment environments. 
- **`develop`** - System Integration Testing environment.
- **`uat`** - User Acceptance Testing environment.
- **`production`** - Production environment.
- **`main`** - Main codebase (often matches production, release branch).

### 2. Remote Repository (Your Fork)
You will do your active development on your forked repository. You should have remote branches that correspond to the origin branches: `develop`, `uat`, `production`, `main`. All feature and bugfix branches must be created from these branches depending on their purpose.

#### 2.1. Developing Features (Merging to SIT)
For new features and general chores, branch off from your remote **`develop`** branch.
- **Branch Naming:** `feature123`, `chore-feature123` (where 123 is the ticket/issue number)
- **Workflow:**
  1. Branch off from your fork's `develop`.
  2. Complete your development.
  3. Merge your branch (e.g., `feature123`, `chore-feature123`) back into your fork's **`develop`** branch (`2.1`).
  4. Create a Pull Request from your fork's **`develop`** (`2.1`) to the Origin's **`develop`** (`1.1`).

#### 2.2. Fixing Issues in UAT
For bug fixes discovered during the UAT phase, branch off from your remote **`uat`** branch.
- **Branch Naming:** `fix-feature123`
- **Workflow:**
  1. Branch off from your fork's `uat`.
  2. Complete your fix.
  3. Merge your branch (e.g., `fix-feature123`) back into your fork's **`uat`** branch (`2.2`).
  4. Create a Pull Request from your fork's **`uat`** (`2.2`) to the Origin's **`uat`** (`1.2`).

#### 2.3. Production Hotfixes
For critical issues that need to be addressed in production immediately, branch off from your remote **`production`** branch.
- **Branch Naming:** `hotfix-bug`, `hotfix-feature`
- **Workflow:**
  1. Branch off from your fork's `production`.
  2. Complete your hotfix.
  3. Merge your branch (e.g., `hotfix-bug`) back into your fork's **`production`** branch (`2.3`).
  4. Create a Pull Request from your fork's **`production`** (`2.3`) to the Origin's **`production`** (`1.3`).

## Summary

- **Feature / Chore** → develop on a branch based on `develop` → merge to your `develop` → PR to origin `develop`.
- **UAT Fix** → develop on a branch based on `uat` → merge to your `uat` → PR to origin `uat`.
- **Production Hotfix** → develop on a branch based on `production` → merge to your `production` → PR to origin `production`.
