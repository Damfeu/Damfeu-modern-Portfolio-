import imgBangui24 from "@/assets/bangui24.webp";
import imgBovan from "@/assets/bovan-group.webp";
import imgCafe from "@/assets/cafe-ecommerce.webp";
import imgCocec from "@/assets/cocec.webp";
import imgCommerceTracking from "@/assets/commerce-tracking-admin.webp";
import imgCV from "@/assets/cv-generator.webp";
import imgDamAI from "@/assets/dam-ai.webp";
import imgDareKing from "@/assets/dareking.webp";
import imgDeyaAbazene from "@/assets/dap-bangui.webp";
import imgDorcas from "@/assets/dorcas.webp";
import imgDSend from "@/assets/d-send.webp";
import imgIA from "@/assets/ia-perfect-research.webp";
import imgMira from "@/assets/mira.webp";
import imgRodFluidity from "@/assets/rod-fluidity-dashboard.webp";
import imgSuperM from "@/assets/super-m.webp";
import imgTodo from "@/assets/todo-mobile-cutout.webp";
import imgAnthony from "@/assets/anthony-mentor.webp";
import imgPatapay from "@/assets/patapay.webp";
import imgWisdomac from "@/assets/wisdomac.webp";
import imgYadah from "@/assets/yadah-records.webp";

export type ProjectCategory = "web" | "mobile" | "saas" | "data";

export interface Project {
  /** Key under `projects.list` in the locale files */
  key: string;
  category: ProjectCategory;
  stack: string[];
  image: string;
  /** Public site */
  url?: string;
  /** Source code, shown when there is no public site */
  repo?: string;
  /** Screenshot is a transparent phone render, shown uncropped */
  mobile?: boolean;
}

export const featuredProjects: Project[] = [
  { key: "bangui24", category: "web", stack: ["React", "Node.js"], image: imgBangui24, url: "https://bangui24.com/" },
  { key: "dorcas", category: "saas", stack: ["Next.js", "Laravel", "Stripe"], image: imgDorcas, url: "https://dorcasechurch.com/" },
  { key: "patapay", category: "saas", stack: ["Next.js", "Tailwind CSS"], image: imgPatapay, url: "https://patapay.vercel.app/" },
  { key: "damAI", category: "data", stack: ["Next.js 15", "TypeScript", "RAG", "Llama 3.3"], image: imgDamAI, url: "https://dam-ai.vercel.app/" },
  { key: "cocec", category: "web", stack: ["Laravel", "Blade", "MySQL", "Tailwind CSS"], image: imgCocec, url: "https://www.cocectogo.org/" },
  { key: "rodFluidity", category: "data", stack: ["React", "TypeScript", "Chart.js", "SheetJS"], image: imgRodFluidity, url: "https://platform-dev.freetrade-ofr.com/" },
];

const otherProjects: Project[] = [
  { key: "todoMobile", category: "mobile", stack: ["Kotlin", "Firebase"], image: imgTodo, repo: "https://github.com/Damfeu/ToDoList-Kotlin", mobile: true },
  { key: "wisdomac", category: "web", stack: ["Next.js", "Tailwind CSS", "Stripe"], image: imgWisdomac, url: "https://wisdomac.fr/" },
  { key: "yadah", category: "web", stack: ["React", "Vite", "TanStack", "Tailwind CSS"], image: imgYadah, url: "https://yadah-peach.vercel.app/" },
  { key: "anthonyMentor", category: "web", stack: ["Next.js", "Tailwind CSS"], image: imgAnthony, url: "https://anthony-mentor.fr/" },
  { key: "deyaAbazene", category: "web", stack: ["PHP", "MySQL"], image: imgDeyaAbazene, url: "https://www.nouvellenergiepourbangui.org/" },
  { key: "dareking", category: "web", stack: ["Laravel", "MySQL", "React", "Cloudinary"], image: imgDareKing, url: "https://www.dareking.fr/" },
  { key: "mira", category: "saas", stack: ["Laravel", "MySQL", "React"], image: imgMira, url: "https://www.mirafagbohoun.com/" },
  { key: "bovanGroup", category: "web", stack: ["Next.js", "Tailwind CSS", "Framer Motion"], image: imgBovan, url: "https://proposition-bovan-group-mo17.vercel.app/" },
  { key: "commerceTracking", category: "data", stack: ["React", "Tailwind CSS", "SheetJS"], image: imgCommerceTracking },
  { key: "iaResearch", category: "data", stack: ["Next.js", "OpenAI API", "Tailwind CSS"], image: imgIA, url: "https://docs.perfectresearch.app/" },
  { key: "cvGenerator", category: "saas", stack: ["Next.js", "PDFLib", "Tailwind CSS"], image: imgCV, url: "https://dam-cv.vercel.app/" },
  { key: "superM", category: "saas", stack: ["Laravel", "MySQL", "CSS"], image: imgSuperM, repo: "https://github.com/Daniel79M/Super-m.git" },
  { key: "cafe", category: "web", stack: ["WordPress", "Stripe", "MySQL"], image: imgCafe, repo: "https://github.com/Damfeu/Ecommer-e-Wordpress" },
  { key: "dSend", category: "saas", stack: ["PHP", "MySQL"], image: imgDSend, repo: "https://github.com/Damfeu/Messagerie-inst" },
];

/** Every project once, featured first — used by the filterable grid */
export const allProjects: Project[] = [...featuredProjects, ...otherProjects];

export const projectLink = (project: Project) => project.url ?? project.repo;

export const projectLinkType = (project: Project): "live" | "code" | "private" =>
  project.url ? "live" : project.repo ? "code" : "private";

export const techMarquee = {
  primary: ["React", "Next.js", "Laravel", "Kotlin", "Flutter", "TypeScript", "Node.js", "Tailwind CSS"],
  secondary: ["Firebase", "PostgreSQL", "Stripe", "Docker", "RAG", "Llama 3.3", "MySQL", "Vercel"],
};
