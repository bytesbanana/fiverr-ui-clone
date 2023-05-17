import { User } from "@/types";

type LinkType = "Link" | "Button";

type HeaderLink = {
  path: string;
  text: string;
  type: LinkType;
  validateUser?: (user: User) => boolean;
};
type LogoLink = { path: string };
type Menu = {
  text: string;
};

type HeaderConfig = {
  logo: LogoLink;
  links: Array<HeaderLink>;
  menu: Array<Menu>;
};

export const config: HeaderConfig = {
  logo: {
    path: "",
  },
  links: [
    {
      path: "/",
      text: "Fiverr Business",
      type: "Link",
    },
    {
      path: "/",
      text: "Explore",
      type: "Link",
    },
    {
      path: "/",
      text: "English",
      type: "Link",
    },
    {
      path: "/",
      text: "Become Seller",
      type: "Link",
      validateUser: (user) => !user?.isSeller
    },
    {
      path: "/",
      text: "Sign in",
      type: "Link",
      validateUser: (user) => !user
    },
    {
      path: "/",
      text: "Join",
      type: "Button",
      validateUser: (user) => !user
    },
  ],
  menu: [
    { text: "Graphics & Design" },
    { text: "Digital Marketing" },
    { text: "Writing & Translation" },
    { text: "Video & Animation" },
    { text: "Music & Audio" },
    { text: "Programming & Tech" },
    { text: "Photography" },
    { text: "Business" },
    { text: "AI Services" },
  ],
};
