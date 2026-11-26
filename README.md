# Hector Oropesa

I build software and connect the systems behind it. My work spans business applications, cloud infrastructure, and device provisioning. I like taking a process people already rely on and making it easier to run, repeat, and support.

[View my portfolio](https://hectorcodes.dev) · [Read my writing](https://hectorcodes.dev/blog) · [Get in touch](https://hectorcodes.dev/#contact)

## Selected work

- **Enterprise MCP:** Connected AI clients to internal tools through a single interface with employee authentication and authorization.
- **GraniteSync:** Built a workflow for granite shops to manage jobs, inventory, and fabricator assignments in one place.
- **Device provisioning:** Automated setup and policy management with Microsoft Intune, NinjaOne RMM, and PowerShell.

## What I write about

I write about lessons from the work itself: moving from the AWS console to Terraform, building repeatable CI/CD pipelines, and running a homelab. My posts cover what changed, what broke, and what I’d do differently.

## Running the site locally

The site uses Astro, React, and Tailwind CSS. With Bun and Node.js 22.23.4 or newer installed:

```sh
bun install --frozen-lockfile
bun run dev
```

Run `bun run build` for a production build. Blog posts live in `src/content/blog/`.
