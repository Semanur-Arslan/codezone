import { FavoriteItem, MenuItem, SliderItem, SocialLink } from "@/types/types";
import { faDiscord, faFacebookF, faSpotify, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const SLIDER_IMAGES: SliderItem[] = [
  {
    src: "/slider/slider_1.png",
    alt: "Slider 1",
    title: "DÜNYA RAP TRENDLERİNİ KONUŞUYORUZ.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    buttonText: "Devamını Oku",
    buttonLink: "/",
     textColor: {
      mobile: "white",
      md: "white"
    }
  },
  {
    src: "/slider/slider_2.png",
    alt: "Slider 2",
   
    title: "TÜRKÇE RAP VE DÜNYA MÜZİK HABERLERİNİ TAKİP ET ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    buttonText: "Devamını Oku",
    buttonLink: "/",
       textColor: {
      mobile: "white",
      md: "primary"
    }
  },

];

export const MENU_ITEMS: MenuItem[] = [
  { id:1, name: "Haberler", href: "/blog" },
  { id:2, name: "Etkinlikler", href: "/blog" },
  { id:3, name: "Müzikler", href: "/blog" },
  { id:4, name: "Videolar", href: "/blog" },
  { id:5, name: "İletişim", href: "/blog" },
];

export const FAVORITE_ITEMS: FavoriteItem[] = [
  { img: "/favorites/one.png", title: "Top 10", number: "2. Sıra", artist: "50 CENT", song: "CURTIS" },
  { img: "/favorites/two.png", title: "Top 10", number: "3. Sıra", artist: "SNOPP DOGG", song: "ALGORITHM" },
  { img: "/favorites/three.png", title: "Top 10", number: "1. Sıra", artist: "CEZA", song: "RÜZGAR" },
  { img: "/favorites/one.png", title: "Top 10", number: "4. Sıra", artist: "KANYE WEST", song: "YEEZUS" },
  { img: "/favorites/two.png", title: "Top 10", number: "5. Sıra", artist: "EMINEM", song: "KAMIKAZE" },
  { img: "/favorites/three.png", title: "Top 10", number: "6. Sıra", artist: "SNOOP DOGG", song: "DOGGY STYLE" },
];


export const TAGS: string[] = [
  "Türk Rap",
  "Yabancı Rap",
  "Rap Haberleri",
  "Haftanın Videoları",
  "Ayın Videoları",
  "Rap Sohbetleri",
  "Rap Müsabakaları",
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Facebook",
    icon: faFacebookF,
    href: "https://www.facebook.com",
  },
  {
    name: "Twitter",
    icon: faTwitter,
    href: "https://www.twitter.com",
  },
  {
    name: "Discord",
    icon: faDiscord,
    href: "https://discord.com",
  },
  {
    name: "Spotify",
    icon: faSpotify,
    href: "https://www.spotify.com",
  },
  {
    name: "YouTube",
    icon: faYoutube,
    href: "https://www.youtube.com",
  },
];