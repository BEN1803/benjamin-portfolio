import { notFound } from "next/navigation";

import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import ScreenshotGallery from "@/components/case-study/ScreenshotGallery";
import { projects } from "@/lib/projects";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Benjamin Florian`,
    description: project.description,
  };
}

export default async function CaseStudyPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f7fa]">
      <CaseStudyHero project={project} />

      <ScreenshotGallery
        screenshots={project.screenshots}
        projectTitle={project.title}
      />
    </main>
  );
}