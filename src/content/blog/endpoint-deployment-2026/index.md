---
title: "I Modernized My MSP's Windows and macOS Staging in Less Than a Year - Here's What I Learned"
date: 2026-07-12
description: "A personal look at rebuilding an MSP's endpoint deployment workflow for Windows and macOS, including JumpCloud API integration, and what I learned about policy-driven staging along the way."
tags:
  - MSP
  - endpoint deployment
  - workstation staging
  - Windows deployment
  - macOS deployment
  - Intune
  - Apple Business Manager
  - MDM
  - JumpCloud
  - API integration
  - IT automation
---

When I joined my current MSP, workstation deployments were handled technician-by-technician, with a lot of manual steps built up over time. It worked, but it didn't scale well - and it was hard to keep every machine consistent. Within my first few weeks, I made it my project to modernize the workflow. Less than a year later, I'd rebuilt our endpoint staging process for both Windows and macOS into something repeatable and easy to hand off.

<!-- IMAGE: hero-workstation-setup.png -->
<!-- Suggested visual: A clean, modern desk shot with a Windows laptop and a MacBook side by side, both showing a setup or enrollment screen. This sets the cross-platform theme without showing proprietary info. -->
<!-- TODO: replace comment with image when asset is ready -->

## The Scope I Took On

I didn't set out to replace everything on day one. The goal was to make deployments more consistent and less dependent on whoever happened to unbox the machine. That meant taking ownership of:

- Windows and macOS staging
- Endpoint policies and configuration
- Automation for repeatable setup tasks
- Documentation and team handoff

I wanted the next technician to know exactly what a ready-to-ship machine looked like, regardless of whether it was a Windows laptop bound for a dental office or a MacBook going to a creative shop.

<!-- IMAGE: scope-overview.png -->
<!-- Suggested visual: A simple 4-quadrant or 4-block diagram showing Windows/macOS staging, policies/configuration, automation, and documentation/handoff. Keep it clean and text-light. -->
<!-- TODO: replace comment with image when asset is ready -->

## What I Built

### Staging policies I designed

I moved us toward policy-driven staging instead of image-based staging. For Windows, that meant leaning into Intune and Autopilot. For macOS, it meant Apple Business Manager and an MDM-driven workflow. The idea was simple: a machine arrives, gets enrolled, and the policies handle the rest.

### Automations I implemented

The repeatable tasks got scripted or pushed through the MDM. Software installs, settings, security baselines - if a technician had to do it more than twice, I tried to find a way to automate it or document it clearly.

### JumpCloud API integration

Several of our clients use JumpCloud, and I noticed we weren't taking full advantage of what its API could do. I started integrating those clients into our RMM solution by mapping each client to their JumpCloud organization ID and syncing device records so each machine had its corresponding JumpCloud system ID.

From there, I built out scripts that talked to the JumpCloud API for the tasks that mattered most - things like keeping device records in sync, triggering commands, and pulling status data back into our tools. The goal was to reduce UI hopping and give the team a more unified setup. Instead of bouncing between the RMM, JumpCloud console, and spreadsheets, technicians could work from one place while the API kept the backends aligned.

This wasn't just about saving clicks. It made the deployment handoff cleaner because a staged machine could land in the right JumpCloud organization with the right system ID already attached.

### Cross-platform consistency

I made Windows and macOS deployments feel like they followed the same standard, even when the tooling was different. Same onboarding steps for the technician, same validation checklist, same handoff to the client.

### Standards I established

I created a standard configuration policy that defined what a deployed machine should look like. That gave the team a shared reference point and made it easier to spot exceptions.

<!-- IMAGE: deployment-workflow.png -->
<!-- Suggested visual: A before/after flow diagram. Before: unbox → manual checklist → install apps → configure settings → hand off. After: unbox → enroll → policies apply → validate → hand off. Use muted colors that match the site. -->
<!-- TODO: replace comment with image when asset is ready -->

## What I Learned Along the Way

### Technical lessons

- **Intune and Apple Business Manager are powerful, but they have edges.** Each platform has its own way of thinking about enrollment, profiles, and app deployment. Learning those mental models took time.
- **Scripts are great until they aren't.** A PowerShell or shell script can save hours, but it also needs logging, error handling, and clear ownership.
- **MDM is not magic.** It still needs good policies behind it, and policies need to be tested before they hit production devices.
- **API integrations reward good data hygiene.** JumpCloud integrations only worked because we took the time to map client IDs and device IDs correctly. Bad data in one system will follow you into the next.

### Process lessons

- **Stakeholders matter more than tooling.** Getting buy-in from the technicians who would use the workflow every day was just as important as choosing the right platform.
- **Change management is real.** Even a better process can fail if people don't know when it's rolling out or why.
- **Documentation is part of the deliverable.** If the team can't reference it later, the improvement doesn't stick.

### Personal lessons

- **Scope creep is easy.** I had to keep reminding myself what problem I was solving this month versus what could wait.
- **Prioritize what proves value fastest.** Early wins built trust and made the bigger changes easier to sell.
- **Knowing when to ship is a skill.** Perfect is the enemy of deployed, especially when technicians are waiting for a smoother workflow.

<!-- IMAGE: lessons-learned.png -->
<!-- Suggested visual: A simple illustrated list or card-style graphic with 3-4 icons representing technical, process, and personal lessons. Could be a small shareable social graphic. -->
<!-- TODO: replace comment with image when asset is ready -->

## The Impact I Created

The process I built cut deployment time per machine and reduced the small inconsistencies that used to generate follow-up tickets. Onboarding new clients and new users got faster because the baseline was already defined. And the team now has a scalable foundation they can keep improving without starting from scratch.

The time savings were real. A deployment that used to take around two hours dropped to about an hour and forty minutes as we standardized the workflow. Now the same process takes roughly thirty to forty minutes. We are handling more machines than before while keeping quality steady because technicians aren't stuck babysitting every step - the policies and automations handle the repeatable work, and people step in only when something actually needs attention.

<!-- IMAGE: impact-metrics.png -->
<!-- Suggested visual: A simple bar or metric card graphic showing qualitative improvements: deployment time ↓, consistency ↑, technician questions ↓, client onboarding speed ↑. Keep numbers vague or use arrows if exact metrics aren't public. -->
<!-- TODO: replace comment with image when asset is ready -->

## What 2026 Endpoint Deployment Looks Like Now

In 2026, workstation deployment is less about building the perfect image and more about building repeatable, policy-driven workflows that work for both Windows and macOS. Zero-touch and low-touch provisioning are the norm. Cross-platform consistency matters because most environments aren't just one OS anymore. Security baseline enforcement is expected by default. API-driven unification between RMM, MDM, and identity tools is becoming essential for reducing UI hopping. And AI-assisted deployment troubleshooting is starting to show up as a real helper, not just a buzzword.

## What I Would Tell Myself a Year Ago

If I were starting this project over, I'd tell myself a few things:

1. **Start with the outcome, not the tool.** Pick the workflow you want first, then choose the platform that supports it.
2. **Document as you go, not after.** You'll think you remember why you made a decision. You won't.
3. **Get feedback from the people doing the work.** Their input will save you from building something that looks good on paper and fails in practice.
4. **Ship the minimum viable version.** You can always improve it once it's in use.
5. **Protect the team's reputation.** Frame the work as improving something that already worked, not fixing something that was broken. You'll still be working with these people when the post goes live.

<!-- IMAGE: 2026-deployment-trends.png -->
<!-- Suggested visual: A forward-looking graphic showing the shift from image-based staging to policy-driven workflows, zero-touch provisioning, cross-platform consistency, security baselines, and AI-assisted troubleshooting. Could be a horizontal timeline or stack of cards. -->
<!-- TODO: replace comment with image when asset is ready -->

---

This was one of the most rewarding projects I've worked on because it combined real technical decisions with process thinking and a lot of communication. If you're an engineer at an MSP or small IT shop thinking about modernizing your endpoint workflow, I hope this gives you a place to start.
