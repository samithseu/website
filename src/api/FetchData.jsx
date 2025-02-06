// fetch all projects from GitHub API
export const fetchProjects = async () => {
  const response = await fetch("https://api.github.com/users/samithseu/repos");
  const data = await response.json();
  return data.filter((project) => project.topics.includes("project"));
};
// fetch all certificates from Nuxt API
export const fetchCertificates = async () => {
  const response = await fetch("https://jroch-nuxt.vercel.app/api/certs");
  const data = await response.json();
  return data;
};
