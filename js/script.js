function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

function toggleBio() {
  const bio = document.getElementById("bio");
  const button = document.querySelector("button");
  if (bio.style.display === "none") {
    bio.style.display = "block";
    button.textContent = "Daha Az Gör";
  } else {
    bio.style.display = "none";
    button.textContent = "Daha Fazla Gör";
  }
}

function filterProjects(category) {
  const projects = document.querySelectorAll(".project-card");

  projects.forEach((project) => {
    project.style.display = "none";
  });

  if (category === "latest") {
    projects[0].style.display = "block";
  } else if (category === "popular") {
    projects[1].style.display = "block";
    projects[2].style.display = "block";
  } else if (category === "all") {
    projects.forEach((project) => {
      project.style.display = "block";
    });
  }
}

function showProjectDetails(projectId) {
  const details = {
    trafficDensity:
      "Bu proje, YOLOv8'in gerçek zamanlı tespit yeteneklerini kullanarak Trafik Yoğunluğu Tahmini yapmaktadır. Kentsel yönetim ve şehir planlamasına yardımcı olmak için araç sayma ve analiz gibi özellikler sunar.",
    faceRecognition:
      "Bu proje, bir web kamerası kullanarak canlı yüz tanıma sistemi sunmaktadır. Sistem, gerçek zamanlı olarak görüntüleri analiz eder ve referans bir görüntü ile eşleşme sağlar.",
    smoke_detect:
      "Yangınlara erken müdahale edebilmek adına PyTorch, OpenCV ve YOLOv8 teknolojilerini kullanarak üzerinde çalıştığım Yangın ve Duman Tespit Sistemi ile katkı sağlamayı hedefliyorum. Sistem, video görüntülerini işleyerek yangın ve dumanı gerçek zamanlı olarak tespit edebilir ve bu bilgileri görüntü üzerinde etiketleyerek hızlı müdahale imkanı sunabilir.",
  };

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button" onclick="closeModal()">&times;</span>
      <h2>Proje Detayları</h2>
      <p>${details[projectId]}</p>
    </div>
  `;

  document.body.appendChild(modal);
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.querySelector(".modal");
  if (modal) {
    modal.remove();
  }
}

function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const feedback = document.getElementById("feedback");

  if (!name || !email || !message) {
    feedback.textContent = "Lütfen tüm alanları doldurun.";
    feedback.style.color = "red";
    return false;
  }

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  feedback.textContent = "Mesaj başarıyla gönderildi!";
  feedback.style.color = "green";

  return false;
}
