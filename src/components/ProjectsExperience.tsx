import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  type: string;
  summary: string;
  stack: string[];
  details: string[];
  live?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Enterprise MCP",
    type: "Infrastructure engineer",
    summary:
      "Enterprise tools connected to AI clients through one secure integration layer.",
    stack: ["MCP", "API integrations", "Secure authentication", "Infrastructure automation"],
    details: [
      "Unified enterprise tool integrations behind a single MCP interface.",
      "Built authenticated employee access and authorization for AI clients.",
      "Automated infrastructure provisioning and service configuration.",
      "Designed deployment workflows for safer releases.",
    ],
  },
  {
    title: "Provisioning Engineer",
    type: "Endpoint management & automation",
    summary:
      "Device provisioning, policy management, and automation across Microsoft services and NinjaOne RMM.",
    stack: ["Microsoft 365", "Entra ID", "Intune", "NinjaOne RMM", "PowerShell"],
    details: [
      "Administered Microsoft 365 and Entra ID identity and access, including user accounts, groups, roles, and permissions.",
      "Enrolled devices in Intune and configured device policies and automations.",
      "Built provisioning workflows and device management automations with NinjaOne RMM and PowerShell.",
      "Set up provisioning monitoring and notifications when devices finished provisioning.",
    ],
  },
  {
    title: "Confidential AWS Infrastructure",
    type: "Infrastructure engineer",
    summary:
      "Repeatable AWS infrastructure with safer state management and deployment planning.",
    stack: ["AWS", "Terraform", "ECS", "ECR", "Docker", "S3", "GitHub Actions", "OIDC"],
    details: [
      "Managed Terraform remote state with S3 versioning and native S3 lockfiles.",
      "Planned GitHub Actions deployments using AWS OIDC instead of long-lived credentials.",
      "Worked with Docker images, ECR for image storage, and ECS for container deployment.",
      "Improved module boundaries across networking, runtime, registry, IAM, and deployment responsibilities.",
    ],
  },
  {
    title: "CM Data",
    type: "Business application · On-prem systems",
    summary:
      "Repair and estimate workflows for commercial trucking shops.",
    stack: ["TanStack Start", "PostgreSQL", "Drizzle", "AWS S3", "Coolify", "On-prem deployment"],
    details: [
      "Built software around commercial trucking repair and estimate workflows.",
      "Designed the data layer with PostgreSQL and Drizzle, with AWS S3 for file storage.",
      "Deployed on-premises and managed application operations through Coolify.",
    ],
  },
  {
    title: "GraniteSync",
    type: "Production SaaS · Cloud delivery",
    summary:
      "Jobs, inventory, and fabricator assignments in one workflow for granite shops.",
    stack: ["AWS", "EC2", "Terraform", "Traefik", "API Gateway", "S3", "PostgreSQL", "GitHub Actions", "Blue-green deployments"],
    details: [
      "Built admin workflows for inventory, job creation, project images, and fabricator profiles.",
      "Provisioned AWS infrastructure with Terraform and managed state in versioned S3 storage.",
      "Deployed on EC2 instances with Traefik as a reverse proxy and blue-green releases.",
      "Set up GitHub OIDC deployments and API Gateway routing for safer releases.",
      "Added email notifications when fabricators are assigned new jobs.",
    ],
  },
  {
    title: "GD Granite",
    type: "Production website",
    summary:
      "A fast business website that turns service browsing into customer inquiries.",
    stack: ["Astro", "TypeScript", "React", "Responsive design"],
    details: [
      "Built and launched a production website for a local granite business.",
      "Created a validated contact form for more useful customer inquiries.",
      "Focused on fast loading, responsive layouts, and clear service information.",
    ],
    live: "https://gdgranite.com",
  },
];

export default function ProjectsExperience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-screen-xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
    >
      <header className="mb-9 sm:mb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300/80">
          Software & systems
        </p>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Experience</h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
          Software, cloud infrastructure, and the systems that keep teams working.
        </p>
      </header>

      <div className="grid gap-7 md:grid-cols-[minmax(13rem,0.7fr)_minmax(0,1.8fr)] md:gap-12">
        <nav aria-label="Select experience" className="grid grid-cols-2 gap-2 self-start md:block md:space-y-2">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={project.title}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveIndex(index)}
                className={`group flex min-h-20 w-full items-center justify-between gap-3 px-3 py-3 text-left transition-colors md:px-4 ${
                  isActive
                    ? "bg-muted/60 text-foreground"
                    : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                }`}
              >
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{project.title}</span>
                  <span className="mt-1 block truncate text-xs text-muted-foreground">{project.type}</span>
                </span>
                <span className={`inline-flex size-5 shrink-0 items-center justify-center ${isActive ? "text-teal-700 dark:text-teal-300" : "text-transparent group-hover:text-muted-foreground"}`}>
                  {isActive ? <ArrowRight aria-hidden="true" className="size-4" /> : <span className="size-1.5 rounded-full bg-current" />}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="grid min-w-0">
        {projects.map((activeProject, index) => (
        <article
          key={activeProject.title}
          aria-hidden={index !== activeIndex}
          className={`col-start-1 row-start-1 min-w-0 pt-2 transition-opacity duration-200 motion-reduce:transition-none ${index === activeIndex ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.17em] text-muted-foreground">
            {activeProject.type}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {activeProject.title}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            {activeProject.summary}
          </p>

          <div className="mt-7">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Key contributions
            </h4>
            <ul className="grid gap-x-7 gap-y-4 text-sm leading-6 text-foreground/85 xl:grid-cols-2">
              {activeProject.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600/70 dark:bg-teal-300/70" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Technology
              </h4>
              <p className="max-w-xl text-sm leading-6 text-foreground/75">
                {activeProject.stack.join(" · ")}
              </p>
            </div>
            {(activeProject.live || activeProject.github) && (
              <div className="flex shrink-0 gap-4 text-sm font-medium">
                {activeProject.live && (
                  <a href={activeProject.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline">
                    Live site <ExternalLink className="size-3.5" />
                  </a>
                )}
                {activeProject.github && (
                  <a href={activeProject.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline">
                    Source <ExternalLink className="size-3.5" />
                  </a>
                )}
              </div>
            )}
          </div>
        </article>
        ))}
        </div>
      </div>
    </section>
  );
}
