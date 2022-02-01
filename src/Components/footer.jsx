import React from "react";

function footer(newPosition) {
    const { newPosition:num } = newPosition;
    return (
        <div id="footer" className={`footer ${num === "relative" ? "position-relative" : ""}`}>
            Designed by Barik Boley | 5902 W Peoria Ave, Glendale, AZ 85302 | <a id="contact-me" href="/contact">Contact Me</a> | Copyright &copy; 2022 My Thoughts
        </div>
    )
}

export default footer
