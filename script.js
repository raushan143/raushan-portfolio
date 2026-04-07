fetch('data.json')
  .then(res => res.json())
  .then(data => {

    // HERO
    document.getElementById("name").innerText = data.personal.name;
    document.getElementById("title").innerText = data.personal.title;
    document.getElementById("aboutText").innerText = data.personal.about;

    // CONTACT
    document.getElementById("email").innerText = "Email: " + data.personal.email;
    document.getElementById("phone").innerText = "Phone: " + data.personal.phone;

    // SERVICES
    const services = document.getElementById("servicesContainer");
    data.services.forEach(s => {
      services.innerHTML += `
        <div class="card">
          <h3>${s.title}</h3>
          <p>${s.description}</p>
        </div>
      `;
    });

    // PROJECTS
    const projects = document.getElementById("projectsContainer");
    data.projects.forEach(p => {
      projects.innerHTML += `
        <div class="card">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <small>${p.year}</small>
        </div>
      `;
    });

    // EXPERIENCE
    const exp = document.getElementById("experienceContainer");
    data.experience.forEach(e => {
      exp.innerHTML += `
        <div>
          <h3>${e.role}</h3>
          <p>${e.company}</p>
          <small>${e.duration}</small>
          <ul>
            ${e.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
      `;
    });

  });

// Smooth Scroll
function scrollToContact(){
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    window.scrollTo({
      top: target.offsetTop - 60, // adjust for navbar height
      behavior: "smooth"
    });
  });
});


