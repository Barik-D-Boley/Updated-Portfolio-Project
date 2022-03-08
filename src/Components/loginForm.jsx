import React from "react";

function loginForm() {
    return (
        <form action="">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" />
        </form>
    )
}

export default loginForm
