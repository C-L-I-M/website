import { getPermalink } from "./utils/permalinks";

export const headerData = {
  links: [
    {
      text: "Home",
      href: getPermalink("/"),
    },
    {
      text: "About",
      href: getPermalink("/about"),
    },
    {
      text: "Contact",
      href: getPermalink("/contact"),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: "Info",
      links: [
        {
          text: "About",
          href: getPermalink("/about"),
        },
        {
          text: "Contact",
          href: getPermalink("/contact"),
        },
      ],
    },
  ],
  socialLinks: [
    {
      ariaLabel: "Github",
      icon: "tabler:brand-github",
      href: "https://github.com/C-L-I-M",
    },
  ],
};
