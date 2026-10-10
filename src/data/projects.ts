import imgBangui24 from "@/assets/Bangui24.png";
import imgBovan from "@/assets/BovanGroup.png";
import imgCafe from "@/assets/cafe-ecommerce.png";
import imgCocec from "@/assets/COCEC.png";
import imgCommerceTracking from "@/assets/commerce-tracking-admin.png";
import imgCV from "@/assets/cv-generator.png";
import imgDamAI from "@/assets/Dam-AI.png";
import imgDareKing from "@/assets/DareKing.png";
import imgDeyaAbazene from "@/assets/DAP BANGUI.png";
import imgDorcas from "@/assets/Dorcas.png";
import imgDSend from "@/assets/d-send.jpg";
import imgIA from "@/assets/ia-perfect-research.jpg";
import imgMira from "@/assets/mira.png";
import imgRodFluidity from "@/assets/rod-fluidity-dashboard.png";
import imgSuperM from "@/assets/super-m.png";
import imgTodo from "@/assets/todo-mobile-cutout.png";

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
  { key: "dorcas", category: "saas", stack: ["Next.js", "Laravel", "Stripe"], image: imgDorcas, url: "https://dorcasechurch.com/" },
  { key: "todoMobile", category: "mobile", stack: ["Kotlin", "Firebase"], image: imgTodo, repo: "https://github.com/Damfeu/ToDoList-Kotlin", mobile: true },
  { key: "damAI", category: "data", stack: ["Next.js 15", "TypeScript", "RAG", "Llama 3.3"], image: imgDamAI, url: "https://dam-ai.vercel.app/" },
  { key: "cocec", category: "web", stack: ["Laravel", "Blade", "MySQL", "Tailwind CSS"], image: imgCocec, url: "https://www.cocectogo.org/" },
  { key: "rodFluidity", category: "data", stack: ["React", "TypeScript", "Chart.js", "SheetJS"], image: imgRodFluidity, url: "https://platform-dev.freetrade-ofr.com/" },
];

export const archiveProjects: Project[] = [
  { key: "bangui24", category: "web", stack: ["React", "Node.js"], image: imgBangui24, url: "https://bangui24.com/" },
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
  { key: "todoMobile", category: "mobile", stack: ["Kotlin", "Firebase"], image: imgTodo, repo: "https://github.com/Damfeu/ToDoList-Kotlin", mobile: true },
];

export const projectLink = (project: Project) => project.url ?? project.repo;

export const projectLinkType = (project: Project): "live" | "code" | "private" =>
  project.url ? "live" : project.repo ? "code" : "private";

export const techMarquee = {
  primary: ["React", "Next.js", "Laravel", "Kotlin", "Flutter", "TypeScript", "Node.js", "Tailwind CSS"],
  secondary: ["Firebase", "PostgreSQL", "Stripe", "Docker", "RAG", "Llama 3.3", "MySQL", "Vercel"],
};
