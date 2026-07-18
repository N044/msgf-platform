"use client";

import { useState } from "react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { resourcesContent, type ResourceTaskId } from "@/content/resources";
import { FeaturedResources } from "./FeaturedResources";
import { QuickAccess } from "./QuickAccess";
import { ResourceLibrary } from "./ResourceLibrary";
import { ResourcesFaq } from "./ResourcesFaq";
import { TaskBrowser } from "./TaskBrowser";

export function ResourcesPageContent() {
  const [selectedTaskId, setSelectedTaskId] = useState<ResourceTaskId | null>(null);
  return <><Section className="bg-[#F8F4EC]"><Container><TaskBrowser {...resourcesContent.taskBrowser} tasks={resourcesContent.tasks} selectedTaskId={selectedTaskId} onTaskChange={setSelectedTaskId} /></Container></Section><Section className="bg-white"><Container><FeaturedResources {...resourcesContent.featured} resources={resourcesContent.featuredResources} allResources={resourcesContent.resources} /></Container></Section><Section className="bg-[#F8F4EC]"><Container><ResourceLibrary {...resourcesContent.library} resources={resourcesContent.resources} selectedTaskId={selectedTaskId} /></Container></Section><Section className="bg-white"><Container><QuickAccess {...resourcesContent.quickAccess} resources={resourcesContent.quickAccessResources} /></Container></Section><Section className="bg-[#F8F4EC]"><Container><ResourcesFaq {...resourcesContent.faq} faqs={resourcesContent.faqs} /></Container></Section></>;
}
