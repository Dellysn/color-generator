import { style } from "@vanilla-extract/css";

export const navbar = style({
    // backgroundColor: "#ffffff22",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: "5px 10px",
    // position: "fixed",
    width: "100%",
    zIndex: 1,
    top: 0,
    left: 0,
});

export const logo = style({
    fontSize: "24px",
});

export const navLinks = style({
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    listStyle: "none",
    gap: "10px",
});

export const link = style({
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    ":hover": {
        color: "#f9c647",
    },
    ":active": {
        color: "#f9c647",
    },
});

export const activeLink = style({
    color: "#f9c647",
});

export const linkHover = style({
    color: "#f9c647",
});
