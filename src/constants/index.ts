import {
  Laptop2,
  Moon,
  Sun,
  Home,
  Settings,
  FolderDot,
  Contact,
  LayoutDashboard,
  BrainCircuit,
} from "lucide-react";

export const NAV_LINKS = [
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const THEMES = [
  {
    label: "Light",
    Icon: Sun,
  },
  {
    label: "Dark",
    Icon: Moon,
  },
  {
    label: "System",
    Icon: Laptop2,
  },
];

export const ADMIN_LINKS = [
  {
    href: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "settings",
    label: "Settings",
    icon: Settings,
  },
  {
    href: "home",
    label: "Home",
    icon: Home,
  },
  {
    href: "skills",
    label: "Skills",
    icon: BrainCircuit,
  },
  {
    href: "projects",
    label: "Projects",
    icon: FolderDot,
  },
  {
    href: "contact",
    label: "Contact",
    icon: Contact,
  },
];
