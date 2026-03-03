# What is OpenSpec?

A simple guide to using OpenSpec.

---

## Table of Contents

- [What is OpenSpec?](#what-is-openspec)
- [Why Use It?](#why-use-it)
- [How It Works](#how-it-works)
- [How to Write Specs](#how-to-write-specs)
- [Template](#template)
- [Example Spec](#example-spec)
- [Tips](#tips)

---

## What is OpenSpec?

Think of OpenSpec as **rules for your code**.

Instead of just saying "do this thing," you write down rules in a simple way.

**Simple example:**

```
BAD CODE:
"Make user login work"

GOOD SPEC:
"GIVEN user has email and password
 WHEN they type right info
 THEN they get in"
```

OpenSpec is a lightweight tool. It helps you describe what your system SHOULD do.

---

## Why Use It?

### Helps You Think

Writing specs helps you think BEFORE you code.

**Without spec:**
You might forget things. You might build wrong thing.

**With spec:**
You have clear plan. You know what to build.

### Helps Your Team

When others read your spec, they understand:

- What you're building
- How it should work
- What happens when things go wrong

### Works with AI Tools

OpenSpec works with coding agents:

- Claude
- Cursor
- GitHub Copilot
- And many more

Your spec helps AI understand what you want!

---

## How It Works

### Simple Words

Use 3 simple words:

- **GIVEN** - What we have
- **WHEN** - What happens
- **THEN** - What should happen

### Format

```
GIVEN something
WHEN something happens
THEN something should happen
```

### What Each Word Means

**GIVEN** - The starting point
What you have before anything happens.

Think: "Where am I starting from?"

**Example:**

```
GIVEN user has an account
```

---

**WHEN** - The action
What you do or what changes.

Think: "What happens now?"

**Example:**

```
WHEN user types password
```

---

**THEN** - The result
What should happen after the action.

Think: "What is the outcome?"

**Example:**

```
THEN user should see home page
```

---

### Adding AND

You can use **AND** to add more details.

**Use AND when:**

- You need multiple conditions
- You want multiple results
- You need extra information

**Examples:**

**Example 1: Multiple conditions**

```
GIVEN user is logged in
AND user has admin rights
WHEN they click delete button
THEN delete the item
```

**Example 2: Multiple results**

```
GIVEN user enters email
WHEN they click login
THEN show them home page
AND send them welcome email
```

**Example 3: Complex case**

```
GIVEN user has valid account
AND account is not locked
AND user types correct password
WHEN they click login
THEN show them dashboard
AND remember their login for 24 hours
```

### Real-World Examples

**Login with AND:**

```
## Scenario: User logs in with "Remember me"

GIVEN user has valid account
WHEN user types email and password
AND user checks "Remember me" box
THEN show them home page
AND keep them logged in for 30 days
```

**Payment with AND:**

```
## Scenario: User buys something

GIVEN user has enough money
WHEN user clicks "Buy" button
AND payment goes through
THEN show them receipt
AND send them confirmation email
AND deduct money from account
```

### Lives With Your Code

Your spec stays in your code folder.

```
my-app/
├── src/
├── openspec/
│   └── specs/
│       └── auth-login/
│           └── spec.md
└── package.json
```

---

## How to Write Specs

### Step 1: Pick a Name

Choose simple name for your feature.

```
openspec/specs/
├── user-login/
├── user-logout/
└── change-password/
```

### Step 2: Write Requirements

Write what system SHOULD do.

Use simple words.

```
## Requirement: User login

The system MUST let users login with email and password.
```

### Step 3: Add Scenarios

Write GIVEN-WHEN-THEN stories.

```
## Scenario: Successful login

GIVEN user has valid account
WHEN they type right email and password
THEN they should get into app
```

### Step 4: Add Edge Cases

What happens when things go wrong?

```
## Scenario: Wrong password

GIVEN user has account
WHEN they type wrong password
THEN they should see "try again"
```

---

## Template

Copy this. Fill it in.

---

# Spec Name

---

## Purpose

[What is this for?]

---

## Requirements

### Requirement 1

[What must happen?]

### Requirement 2

[What must happen?]

---

## Scenarios

### Scenario 1: [Name]

**GIVEN** [what we have]

**WHEN** [what happens]

**THEN** [what should happen]

---

### Scenario 2: [Name]

**GIVEN** [what we have]

**WHEN** [what happens]

**THEN** [what should happen]

---

### Scenario 3: [Name]

**GIVEN** [what we have]

**WHEN** [what happens]

**THEN** [what should happen]

---

## Edge Cases

### Edge Case 1: [Name]

**GIVEN** [what we have]

**WHEN** [what goes wrong]

**THEN** [what should happen]

---

### Edge Case 2: [Name]

**GIVEN** [what we have]

**WHEN** [what goes wrong]

**THEN** [what should happen]

---

**Done! 🎉**

---

## Example Spec

Filled in example for user login.

---

# User Login

---

## Purpose

Let users login to app safely.

---

## Requirements

### Requirement 1

Users must be able to login with email and password.

### Requirement 2

System must show error if password is wrong.

---

## Scenarios

### Scenario 1: Successful login

**GIVEN** User has valid email and password

**WHEN** User types correct email and password

**THEN** User should see app home page

---

### Scenario 2: Wrong password

**GIVEN** User has valid email

**WHEN** User types wrong password

**THEN** System should show "Password wrong" message

---

## Edge Cases

### Edge Case 1: No account

**GIVEN** User tries to login

**WHEN** Email is not in system

**THEN** System should show "Account not found"

---

### Edge Case 2: Account locked

**GIVEN** User failed login 5 times

**WHEN** User tries again

**THEN** System should show "Account locked. Try in 10 minutes"

---

## Tips

### Keep It Simple

Write like you talk to a friend.

**Bad:**

```
"The system SHALL implement OAuth2 authentication protocol"
```

**Good:**

```
"Users login with email and password"
```

### Use Clear Names

Don't use names like "feature1" or "thing".

**Bad:**

```
openspec/specs/thing-1/
```

**Good:**

```
openspec/specs/user-login/
openspec/specs/user-logout/
```

### Update As You Go

Your spec is not set in stone.

If you change your mind, update the spec!

### Review With Team

Before you code, show your spec to team.

Ask: "Does this make sense?"

---

**Happy spec writing! 🚀**
