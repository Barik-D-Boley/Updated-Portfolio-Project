import React from "react";
import bcrypt from "bcryptjs";

function loginForm() {
    return (
        <form action="">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" />
            <input type="submit" />
        </form>
    )
}

export default loginForm
