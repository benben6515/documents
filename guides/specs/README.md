# How to Write a Spec (Simple Guide)

A simple guide to writing technical specifications.

---

## Table of Contents

- [What is a Spec?](#what-is-a-spec)
- [Why Write One?](#why-write-one)
- [The 7 Parts](#the-7-parts)
- [Simple Writing Rules](#simple-writing-rules)
- [Template](#template)
- [Common Mistakes](#common-mistakes)
- [Quick Checklist](#quick-checklist)

---

## What is a Spec?

Think of a spec like **building Lego**.

Before you start building, you need:
- What you're making (a car? a house?)
- What pieces you need
- How pieces fit together
- What it should look like when done

A spec is that plan. Written down. Before you code.

**Simple example:**
```
BAD: "I'll make a login system"

GOOD: "Users can enter email and password. 
        If right, they get in. 
        If wrong, they try again.
        System remembers who they are."
```

---

## Why Write One?

### Don't Forget Things

When you write things down, you don't forget important stuff.

**Without spec:** "Oh no, I forgot to add logout!"

**With spec:** "It's right here on page 3!"

### Everyone Agrees

When everyone sees the plan, they all know what to do.

- You know what to build
- Your friend knows what to build
- The same thing!

### Less Mistakes

Writing helps you think first.

You catch problems **before** you write code.

This is good. It saves time.

---

## The 7 Parts

A good spec has 7 parts. Simple ones.

### Part 1: What is This?

**Answer these:**
- What is this thing called?
- Who is writing it?
- When was it written?

**Example:**
```
Name: User Login System
Writer: Sarah
Date: Jan 15, 2025
```

**Why it matters:** 
Everyone knows what this is about. Easy to find later.

---

### Part 2: What Problem Are We Solving?

**Explain simply:**
- What's wrong now?
- Why fix it?

**Example:**
```
PROBLEM:
Users can't log in to our app.
They get angry and leave.
This makes us lose money.
```

**Why it matters:**
Everyone understands **why** we're doing this.

---

### Part 3: How Will We Fix It?

**This is the main part. Explain:**

**How it works:**
```
SOLUTION:
1. User types email and password
2. System checks if right
3. If right → User gets in
4. If wrong → "Try again" message
```

**What happens when things go wrong:**
```
WRONG PASSWORD:
Show "Password is wrong"
Let them try 3 times

NO EMAIL:
Show "Email not found"
Show "Sign up" button
```

**Why it matters:**
This is your **plan**. You build this.

---

### Part 4: What Else to Think About?

**Questions to ask:**

**Does this break anything else?**
```
Don't break the "forgot password" feature.
It still needs to work.
```

**Is it safe?**
```
Passwords must be secret.
Don't show them to anyone.
```

**Will it be slow?**
```
Should be fast.
Less than 1 second to log in.
```

**Why it matters:**
You think of problems **before** they happen.

---

### Part 5: How Do We Know It Worked?

**Pick simple things to check:**

**Example:**
```
SUCCESS CHECKS:
✓ 100 users can log in
✓ Wrong passwords don't let them in
✓ Takes less than 1 second
✓ Works on phone and computer
```

**Why it matters:**
When done, you know if it's good!

---

### Part 6: When Will It Be Done?

**Break into small steps:**

**Example:**
```
TIMELINE:

Week 1: Make the login screen
Week 2: Connect to database
Week 3: Test with 10 people
Week 4: Fix problems
Week 5: Everyone can use it!
```

**Why it matters:**
Everyone knows when things happen. No surprises.

---

### Part 7: What Don't We Know Yet?

**It's okay to not know everything!**

**Write down questions:**
```
QUESTIONS:
- What if user forgets password? 
  → We'll add "forgot password" next month
- Should they stay logged in forever?
  → Ask the boss
- What if 1000 people try at once?
  → Test this and see
```

**Why it matters:**
You show you thought about it. Others help answer.

---

## Simple Writing Rules

### Use Small Words

**Bad:** "Implement authentication protocol"

**Good:** "Let people log in"

### Short Sentences

**Bad:** "The system will authenticate the user credentials via a secure mechanism"

**Good:** "Users log in. It's safe."

### Real Examples

Use things people know:
- Like a house key
- Like a store receipt
- Like a video game level

### No Big Words Without Explaining

**Bad:** "Orchestrate the architecture" (What does that mean?)

**Good:** "Put the pieces together"

---

## Template

Copy this. Fill it in.

---

### Spec Template

**Name:** [What is this?]
**Writer:** [Your name]
**Date:** [Today]

---

### What Problem Are We Solving?

Right now: [What's wrong?]

Why fix it: [Why does it matter?]

---

### How Will We Fix It?

**Step 1:** [What happens first?]
**Step 2:** [What happens next?]
**Step 3:** [What happens last?]

**What if it breaks?**
[What do we do?]

---

### What Else Should We Think About?

**Will this break other things?**
[Yes/No and what?]

**Is it safe?**
[What makes it safe?]

**Will it be fast enough?**
[How fast?]

---

### How Do We Know It Worked?

✓ [Check 1]
✓ [Check 2]
✓ [Check 3]

---

### When Will It Be Done?

[Date]: [Step 1]
[Date]: [Step 2]
[Date]: [Step 3]
[Date]: [Done!]

---

### What Don't We Know Yet?

**Question:** [Something you don't know]
**Maybe we'll:** [How to solve it]

---

### Who Helped?

[Name]: [What they did]

---

**Thanks! 🎉**

---

## Filled Example

Here's the template filled in for a login system.

---

### Spec Template

**Name:** User Login
**Writer:** Sarah
**Date:** Jan 15, 2025

---

### What Problem Are We Solving?

Right now: Users can't log in to our app. They get angry.

Why fix it: We need users to use our app to make money.

---

### How Will We Fix It?

**Step 1:** User types email and password
**Step 2:** System checks if it's right
**Step 3:** If right, they get in. If wrong, they try again.

**What if it breaks?**
- If internet is down: Show "Can't connect"
- If database is slow: Show "Please wait"

---

### What Else Should We Think About?

**Will this break other things?**
No. Nothing uses login yet.

**Is it safe?**
Yes. Passwords are hidden. Nobody sees them.

**Will it be fast enough?**
Yes. Should take less than 1 second.

---

### How Do We Know It Worked?

✓ 100 users can log in
✓ Wrong passwords don't let them in
✓ Takes less than 1 second
✓ Works on phone

---

### When Will It Be Done?

Jan 20: Make the login screen
Jan 27: Connect to database
Feb 3: Test with 10 people
Feb 10: Everyone can use it!

---

### What Don't We Know Yet?

**Question:** What if user forgets password?
**Maybe we'll:** Add "forgot password" button in March

---

### Who Helped?

Mike: Helped with database
Lisa: Made the pictures

---

**Thanks! 🎉**

---

## Common Mistakes

### Words Too Big

**Bad:** "Implement authentication" 
**Good:** "Let people log in"

**Bad:** "Deploy the feature" 
**Good:** "Put it on the website"

### Forgot Something

**Bad:** "Users can log in" 
**Good:** "Users can log in AND log out"

### Not Clear

**Bad:** "Fix the login" 
**Good:** "Users enter email and password. If right, they get in."

---

## Quick Checklist

Before you share your spec, check:

✓ Did I say what the problem is?
✓ Did I say how to fix it?
✓ Are my words small and simple?
✓ Did I think about what happens if it breaks?
✓ Do I know when it will be done?
✓ Did I write down what I don't know yet?

---

## Done!

Your spec is ready. Share it with your team.

They will understand. You will build the right thing.

**Happy writing! 🚀**
