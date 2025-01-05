import { useState } from "react";

function Login({ onLogin }) { // Accept onLogin as a prop
    const [role, setRole] = useState("creator");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const validPassword = role === "creator" ? "creator123" : "verifier123";
        if (password === validPassword) {
            onLogin(role); // Call onLogin with the selected role
        } else {
            alert("Invalid password. Please try again.");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <select onChange={(e) => setRole(e.target.value)}>
                <option value="creator">Creator</option>
                <option value="verifier">Verifier</option>
            </select>
            <input
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;