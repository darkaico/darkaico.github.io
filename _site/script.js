document.addEventListener("DOMContentLoaded", function () {
  const username = "darkaico"; // Your GitHub username
  const url = `https://api.github.com/users/${username}/repos`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const repoList = document.getElementById("repo-list");
      data.forEach((repo) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${repo.html_url}">${repo.name}</a> - ${
          repo.description || "No description available."
        }`;
        repoList.appendChild(listItem);
      });
    })
    .catch((error) => console.error("Error fetching repositories:", error));
});
