document
  .getElementById("toggle-dark-mode")
  .addEventListener("click", async () => {
    const isDarkMode = await window.darkMode.toggle();
    document.getElementById("theme-source").innerHTML = isDarkMode
      ? "Dark"
      : "Light";
  });

document
  .getElementById("reset-to-system")
  .addEventListener("click", async () => {
    await window.darkMode.system();
    document.getElementById("theme-source").innerHTML = "System";
  });

// Close app
document.getElementById("close").addEventListener("click", async () => {
  await window.app.close();
});

// Close app
document.getElementById("devtools").addEventListener("click", async () => {
  await window.app.dev();
});

// Close app
document.getElementById("drag").addEventListener("click", async () => {
  await window.app.drag();
});
