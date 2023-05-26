import { User } from "@/types";

type LinkType = "Link" | "Button";

type HeaderLink = {
  id: string;
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
      id: "fiverr-business",
      path: "/",
      text: "Fiverr Business",
      type: "Link",
    },
    {
      id: 'explore',
      path: "/",
      text: "Explore",
      type: "Link",
    },
    {
      id: 'english',
      path: "/",
      text: "English",
      type: "Link",
    },
    {
      id: 'become-seller',
      path: "/",
      text: "Become Seller",
      type: "Link",
      validateUser: (user) => !user?.isSeller,
    },
    {
      id: 'sign-in',
      path: "/",
      text: "Sign in",
      type: "Link",
      validateUser: (user) => !user,
    },
    {
      id: 'join',
      path: "/",
      text: "Join",
      type: "Button",
      validateUser: (user) => !user,
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
