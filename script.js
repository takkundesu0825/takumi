document.addEventListener("DOMContentLoaded", () => {
  // タブ切り替え
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = link.dataset.tab;

      tabLinks.forEach(l => l.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      link.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });

  // モーダル
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalVideo = document.getElementById("modal-video");
  const modalUsername = document.getElementById("modal-username");
  const modalIcon = document.getElementById("modal-icon");
  const modalCaption = document.getElementById("modal-caption");
  const modalLikes = document.getElementById("modal-likes");
  const modalDate = document.getElementById("modal-date");
  const modalClose = document.getElementById("modal-close");

  const allMedia = document.querySelectorAll("#gallery img, #videos img");

  allMedia.forEach(media => {
    media.addEventListener("click", () => {
      const isVideo = media.dataset.video !== undefined;

      if (isVideo) {
        modalImg.style.display = "none";
        modalVideo.style.display = "block";
        modalVideo.src = media.dataset.video;
        modalVideo.play();
      } else {
        modalVideo.pause();
        modalVideo.style.display = "none";
        modalImg.style.display = "block";
        modalImg.src = media.src;
      }

      modalUsername.textContent = media.dataset.username || "@dummy_user";
      modalIcon.src = media.dataset.icon || "default-icon.jpg";
      modalCaption.innerHTML = media.dataset.caption || "";
      modalLikes.textContent = `いいね！${media.dataset.likes || 0}件`;
      modalDate.textContent = `・${media.dataset.date || ""}`;

      modal.classList.add("show");
    });
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("show");
    modalVideo.pause();
    modalVideo.currentTime = 0;
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.remove("show");
      modalVideo.pause();
      modalVideo.currentTime = 0;
    }
  });
});
