import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/App.tsx
import { Box, Text, HStack, IconButton, Avatar, useColorMode, useColorModeValue, Divider, } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";
const App = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue("gray.50", "gray.800");
    const textColor = useColorModeValue("gray.700", "gray.200");
    const borderColor = useColorModeValue("gray.200", "gray.700");
    const location = useLocation();
    return (_jsx(Box, { minH: "100vh", bg: bg, children: _jsxs(Box, { maxW: "1000px", mx: "auto", px: 6, children: [_jsx(Box, { position: "sticky", top: "0", zIndex: "1000", bg: bg, py: 4, borderBottom: "1px solid", borderColor: borderColor, mb: 6, children: _jsxs(HStack, { justify: "space-between", children: [_jsxs(HStack, { spacing: 4, children: [_jsx(Link, { to: "/", style: { fontWeight: location.pathname === "/" ? "bold" : "normal", color: textColor }, children: "Home" }), _jsx(Link, { to: "/about", style: { fontWeight: location.pathname === "/about" ? "bold" : "normal", color: textColor }, children: "About" }), _jsx(Link, { to: "/experience", style: { fontWeight: location.pathname === "/experience" ? "bold" : "normal", color: textColor }, children: "Experience" }), _jsx(Link, { to: "/blog", style: { fontWeight: location.pathname === "/blog" ? "bold" : "normal", color: textColor }, children: "Blog" })] }), _jsxs(HStack, { spacing: 3, children: [_jsx(IconButton, { "aria-label": "Toggle dark mode", icon: colorMode === "light" ? _jsx(FaMoon, {}) : _jsx(FaSun, {}), onClick: toggleColorMode, variant: "ghost" }), _jsx(Avatar, { name: "Brandon Johnson", size: "sm", src: "/avatar.png" })] })] }) }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/experience", element: _jsx(Experience, {}) }), _jsx(Route, { path: "/blog", element: _jsx(Blog, {}) })] }), _jsx(Divider, { mt: 10, mb: 4 }), _jsxs(Box, { textAlign: "center", py: 4, children: [_jsxs(Text, { fontSize: "sm", color: "gray.500", mb: 2, children: ["\u00A9 ", new Date().getFullYear(), " Brandon Johnson \u2022 Built with React + Chakra UI"] }), _jsxs(HStack, { spacing: 4, justify: "center", children: [_jsx("a", { href: "https://github.com/bjohnsonascte", target: "_blank", rel: "noopener noreferrer", children: _jsx(IconButton, { icon: _jsx("i", { className: "fab fa-github" }), "aria-label": "GitHub", variant: "ghost", size: "sm" }) }), _jsx("a", { href: "https://www.linkedin.com/in/brandon-johnson-a32ab0224/", target: "_blank", rel: "noopener noreferrer", children: _jsx(IconButton, { icon: _jsx("i", { className: "fab fa-linkedin" }), "aria-label": "LinkedIn", variant: "ghost", size: "sm" }) }), _jsx("a", { href: "mailto:branjohnson2305@gmail.com", children: _jsx(IconButton, { icon: _jsx("i", { className: "fas fa-envelope" }), "aria-label": "Email", variant: "ghost", size: "sm" }) })] })] })] }) }));
};
export default App;
