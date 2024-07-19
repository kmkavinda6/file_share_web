// document.addEventListener("DOMContentLoaded", function () {
//   fetch("/data/")
//     .then((response) => response.text())
//     .then((html) => {
//       const parser = new DOMParser();
//       const doc = parser.parseFromString(html, "text/html");
//       const links = doc.querySelectorAll("a");
//       const fileList = document.getElementById("fileList");

//       links.forEach((link) => {
//         if (link.href.endsWith("/")) return; // Skip directories
//         const li = document.createElement("li");
//         const a = document.createElement("a");
//         a.href = "/data/" + link.textContent;
//         a.textContent = link.textContent;
//         li.appendChild(a);
//         fileList.appendChild(li);
//       });
//     })
//     .catch((error) => console.error("Error fetching file list:", error));
// });

document.addEventListener("DOMContentLoaded", function () {
  fetch("/data/")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const links = doc.querySelectorAll("a");
      const fileList = document.getElementById("fileList");

      links.forEach((link) => {
        if (link.href.endsWith("/")) return; // Skip directories
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "/data/" + link.textContent;
        a.textContent = link.textContent;
        a.download = ""; // Hint to the browser to download the file
        li.appendChild(a);
        fileList.appendChild(li);
      });
    })
    .catch((error) => console.error("Error fetching file list:", error));
});
