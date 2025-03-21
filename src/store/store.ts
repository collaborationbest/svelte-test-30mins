import { writable } from "svelte/store";
import Home from "../routes/icons/Home.svelte";
import Messages from "../routes/icons/Messages.svelte";
import Help from "../routes/icons/Help.svelte";

export const UserAvatars = writable([
    { url: "/avatar/1.png", ml: '0px', isBorder: true },
    { url: "/avatar/2.png", ml: '-10px', isBorder: true },
    { url: "/avatar/3.png", ml: '-10px', isBorder: false },
]);

export const Items = writable([
    {
        id: 1,
        title: "In-game bonuses and free spins"
    },
    {
        id: 2,
        title: "Crypto deposit still not credited?"
    },
    {
        id: 3,
        title: "EigerX VIP program overview"
    },
    {
        id: 4,
        title: "Achievements and awards"
    },
])

export const FooterItems = writable([
    {
        id: 1,
        title: "Home",
        Icon: Home
    },
    {
        id: 2,
        title: "Messages",
        Icon: Messages
    },
    {
        id: 3,
        title: "Help",
        Icon: Help
    }
])