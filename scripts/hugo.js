// Tiny cross-shell launcher for the vendored hugo.exe.
// Lets `npm run dev` / `build` / `serve` work in cmd, PowerShell, and bash
// without relying on the shell's current-directory executable lookup.
const { spawn } = require("child_process");
const path = require("path");

const exe = path.join(__dirname, "..", "hugo.exe");
const args = process.argv.slice(2);

const child = spawn(exe, args, { stdio: "inherit", shell: false });

child.on("error", (err) => {
    console.error("Failed to launch hugo.exe:", err.message);
    process.exit(1);
});
child.on("exit", (code) => process.exit(code ?? 0));
