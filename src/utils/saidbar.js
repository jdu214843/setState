import { ReactComponent as home } from "../assets/icons/Home.fill.svg";
import styled from "styled-components";
const Icons = styled.div``;

Icons.Home = styled(home)`
  width: 16px;
  height: 16px;
`;
export const sidebar = [
  {
    id: 1,
    data: [
      { id: 1, title: "Home", icons: Icons.Home },
      { id: 2, title: "Explore", icons: Icons.Home },
      { id: 3, title: "Subscription", icons: Icons.Home },
    ],
  },
  {
    id: 2,
    data: [
      { id: 2, title: "History", icons: Icons.Home },
      { id: 1, title: "Library", icons: Icons.Home },
      { id: 3, title: "Your Videos", icons: Icons.Home },
      { id: 4, title: "Watch Later", icons: Icons.Home },
      { id: 5, title: "Liked Videos", icons: Icons.Home },
      { id: 6, title: "Show More", icons: Icons.Home },
    ],
  },
  {
    id: 3,
    title: "Subscriptions",
    data: [
      { id: 1, title: "Texno Smart", icons: Icons.Home },
      { id: 2, title: "Texno Smart", icons: Icons.Home },
      { id: 3, title: "Texno Smart", icons: Icons.Home },
      { id: 4, title: "Texno Smart", icons: Icons.Home },
      { id: 5, title: "Webbrain Academy", icons: Icons.Home },
      { id: 6, title: "Webbrain Academy", icons: Icons.Home },
      { id: 7, title: "Webbrain Academy", icons: Icons.Home },
      { id: 8, title: "Webbrain Academy", icons: Icons.Home },
    ],
  },
  {
    id: 4,
    title: "More from YouTube",
    data: [
      { id: 1, title: "YouTube Premium", icons: Icons.Home },
      { id: 2, title: "Settings", icons: Icons.Home },
      { id: 3, title: "Help", icons: Icons.Home },
      { id: 4, title: "Report Issus", icons: Icons.Home },
      { id: 5, title: "Home", icons: Icons.Home },
      { id: 6, title: "Home", icons: Icons.Home },
      { id: 7, title: "Home", icons: Icons.Home },
      { id: 8, title: "Home", icons: Icons.Home },
    ],
  },
];
