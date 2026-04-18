// Mobile Navigation Toggle
const mobileToggle = document.getElementById("mobileToggle");
const sidebar = document.querySelector(".sidebar");
const navMenu = document.querySelector(".nav-menu");

if (mobileToggle) {
  mobileToggle.addEventListener("click", () => {
    mobileToggle.classList.toggle("active");
    sidebar.classList.toggle("mobile-open");
  });
}

// Submenu Toggle for Projects
const submenuToggles = document.querySelectorAll(".submenu-toggle");
submenuToggles.forEach((toggle) => {
  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    const parent = this.parentElement;
    parent.classList.toggle("open");
  });
});

// Close mobile menu when clicking on a link (except submenu toggles)
document.querySelectorAll(".nav-menu a:not(.submenu-toggle)").forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileToggle) {
      mobileToggle.classList.remove("active");
      sidebar.classList.remove("mobile-open");
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 50,
      behavior: "smooth",
    });
  });
});

// Skill bars animation - trigger when skills section is in view
const skillBars = document.querySelectorAll(".skill-progress");

const animateSkillBars = () => {
  skillBars.forEach((bar) => {
    const position = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      const width = bar.getAttribute("data-width");
      bar.style.width = width;
    }
  });
};

// Run animation when page loads
window.addEventListener("load", animateSkillBars);
window.addEventListener("load", adjustAllGalleries);

// Run animation when scrolling
window.addEventListener("scroll", animateSkillBars);

// Adjust galleries on resize
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(adjustAllGalleries, 150);
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
    }
  });
}, observerOptions);

// Observe elements to animate
document
  .querySelectorAll(
    ".project-card, .about-text, .about-stats, .contact-item, .contact-form, .skill-category",
  )
  .forEach((el) => {
    el.classList.add("not-animated");
    observer.observe(el);
  });

// Animate stats when they come into view
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  },
  {
    threshold: 0.5,
  },
);

document.querySelectorAll(".stat").forEach((stat) => {
  statsObserver.observe(stat);
});

// Add animation to project links
document.querySelectorAll(".project-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (this.getAttribute("href") === "#") {
      e.preventDefault();
    }
  });
});

// Add ripple effect to buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 500);
  });
});

// ========================================
// Project Gallery & Full Gallery Functions
// ========================================

// Gallery data for each project - ALL SCREENSHOTS
const projectGalleries = {
  playstation: {
    title: "PlayStation Rental Application",
    images: [
      "project/project1/halaman-beranda-pelanggan3.png",
      "project/project1/halaman-beranda-pelanggan2.png",
      "project/project1/dashboard-admin.png",
      "project/project1/halaman-beranda-pelanggan.png",
      "project/project1/halaman-beranda-pelanggan4.png",
      "project/project1/halaman-beranda-pemilik.png",
      "project/project1/halaman-daftar-sewa-kasir.png",
      "project/project1/halaman-dashboard-kasir.png",
      "project/project1/halaman-keranjang-pelanggan.png",
      "project/project1/halaman-laporan-pendapatan-pemilik.png",
      "project/project1/halaman-login.png",
      "project/project1/halaman-register1.png",
      "project/project1/halaman-register2.png",
      "project/project1/halaman-riwayat-sewa-pelanggan.png",
      "project/project1/halaman-sewa-game-pelanggan.png",
      "project/project1/halaman-sewa-game2-pelanggan.png",
      "project/project1/halaman-sewa-ps-pelanggan.png",
      "project/project1/halaman-sewa-ps2-pelanggan.png",
      "project/project1/halaman-status-unit-pemilik.png",
      "project/project1/halaman-transaksi-kasir.png",
      "project/project1/h.png",
      "project/project1/laporan-admin.png",
      "project/project1/tambah-aksesoris-admin.png",
      "project/project1/tambah-game-admin.png",
      "project/project1/tambah-kasir-admin.png",
      "project/project1/tambah-pelanggan-admin.png",
      "project/project1/tambah-pemilik-admin.png",
      "project/project1/tambah-unit-ps-admin.png",
    ],
    captions: [
      "Beranda Pelanggan ",
      "Beranda Pelanggan",
      "Dashboard Admin",
      "Beranda Pelanggan ",
      "Beranda Pelanggan ",
      "Beranda Pemilik",
      "Daftar Sewa Kasir",
      "Dashboard Kasir",
      "Keranjang Pelanggan",
      "Laporan Pendapatan",
      "Login",
      "Register 1",
      "Register 2",
      "Riwayat Sewa",
      "Sewa Game",
      "Sewa Game 2",
      "Sewa PS",
      "Sewa PS 2",
      "Status Unit",
      "Transaksi Kasir",
      "Home",
      "Laporan Admin",
      "Tambah Aksesoris",
      "Tambah Game",
      "Tambah Kasir",
      "Tambah Pelanggan",
      "Tambah Pemilik",
      "Tambah Unit PS",
    ],
    github: "https://github.com/Daalleee/playstation.git",
  },
  marketplace: {
    title: "Marketplace Application",
    images: [
      "project/project2/02-homepage-marketplace/homepage-2.png",
      "project/project2/01-authentication/login-customer-home.png",
      "project/project2/01-authentication/login-customer-home-2.png",
      "project/project2/02-homepage-marketplace/homepage-1.png",
      "project/project2/02-homepage-marketplace/homepage-3.png",
      "project/project2/02-homepage-marketplace/marketplace.png",
      "project/project2/03-user-dashboard/sell-form.png",
      "project/project2/03-user-dashboard/sell-form-2.png",
      "project/project2/04-shopping-checkout/cart.png",
      "project/project2/05-order-management/orders.png",
      "project/project2/06-communication/messages.png",
      "project/project2/01-authentication/login.png",
      "project/project2/01-authentication/register.png",
    ],
    captions: [
      "Homepage ",
      "Home customer ",
      "Home customer ",
      "Homepage",
      "Homepage",
      "Home customer ",
      "Shell product",
      "Shell product",
      "Cart",
      "Cart",
      "Messages",
      "Login",
      "Register",
    ],
    github: "https://github.com/Daalleee/marketplace.git",
  },
  "dapur-roti": {
    title: "Dapur Roti Application",
    images: [
      "project/project3/01-homepage.png",
      "project/project3/02-homepage-products.png",
      "project/project3/03-kategori.png",
      "project/project3/04-login.png",
      "project/project3/05-admin-dashboard.png",
      "project/project3/06-admin-orders.png",
      "project/project3/07-admin-add-product.png",
      "project/project3/08-admin-add-category.png",
      "project/project3/09-admin-reports.png",
    ],
    captions: [
      "Homepage",
      "Homepage",
      "Homepage",
      "Login",
      "Admin Dashboard",
      "Admin Orders",
      "Products",
      "Categories",
      "Reports",
    ],
    github: "https://github.com/Daalleee/dapur-roti.git",
  },
  "rental-motor": {
    title: "Rental Motor Application",
    images: [
      "project/project4/user-dashboard-motors.png",
      "project/project4/admin-motor-management.png",
      "project/project4/admin-rentals.png",
      "project/project4/kelola_pengguna_admin.png",
      "project/project4/kasir-daftar-sewa.png",
      "project/project4/kasir-status-sewa.png",
      "project/project4/auth-login.png",
      "project/project4/auth-register.png",
    ],
    captions: [
      "User Dashboard",
      "Motor Management",
      "Rentals Management",
      "User Management",
      "Daftar Sewa",
      "Status Sewa",
      "Login",
      "Register",
    ],
    github: "https://github.com/Daalleee/project-rental-motor.git",
  },
  "powerbi-chocolate": {
    title: "Chocolate Sales Analysis - Power BI Dashboard",
    images: [
      "project/project5/Cuplikan layar 2026-03-27 150607.png",
      "project/project5/Cuplikan layar 2026-03-27 150633.png",
      "project/project5/Cuplikan layar 2026-03-27 150651.png",
      "project/project5/Cuplikan layar 2026-03-27 150710.png",
      "project/project5/Cuplikan layar 2026-03-27 152425.png",
    ],
    captions: [
      "Dashboard Overview",
      "Executive Summary",
      "Analysis Geo",
      "Analysis Product",
      "Performance Team",
    ],
    github: "#",
  },
  "powerbi-customer": {
    title: "Customer Analytics - Power BI Dashboard",
    images: ["project/project6/image.png"],
    captions: [
      "Customer Overview Dashboard",
      "Customer Segmentation Analysis",
      "Customer Behavior Patterns",
      "Customer Retention Metrics",
    ],
    github: "#",
  },
  "powerbi-financial": {
    title: "Financial Analytics - Power BI Dashboard",
    images: [
      "project/project7/Cuplikan layar 2026-03-29 030346.png",
      "project/project7/Cuplikan layar 2026-03-29 030402.png",
      "project/project7/Cuplikan layar 2026-03-29 030414.png",
      "project/project7/Cuplikan layar 2026-03-29 030424.png",
    ],
    captions: ["Dashboard Overview", "Summary page", "Job Rule", "Education"],
    github: "#",
  },
  "powerbi-supply": {
    title: "  Airline Executive Performance Dashboard ",
    images: [
      "project/project8/DASHBOARD.png",
      "project/project8/OVERVIEW.png",
      "project/project8/FLIGHT PERFORMANCE.png",
      "project/project8/PASSENGER ANALYSIS.png",
      "project/project8/GEOGRAPHIC ANALYSIS.png",
    ],
    captions: [
      "DASHBOARD",
      "OVERVIEW",
      "FLIGHT PERFORMANCE",
      "PASSENGER ANALYSIS",
      "GEOGRAPHIC ANALYSIS",
    ],
    github: "#",
  },
  "powerbi-hr": {
    title: "HR Analytics - Power BI Dashboard",
    images: [
      "images/powerbi-hr/hr-overview.png",
      "images/powerbi-hr/employee-attrition.png",
      "images/powerbi-hr/recruitment-metrics.png",
      "images/powerbi-hr/performance-review.png",
    ],
    captions: [
      "HR Overview Dashboard",
      "Employee Attrition Analysis",
      "Recruitment Metrics",
      "Performance Review",
    ],
    github: "#",
  },
   "powerbi-health": {
     title: "Health Analytics - Power BI Dashboard",
     images: [
       "images/powerbi-health/health-overview.png",
       "images/powerbi-health/disease-trends.png",
       "images/powerbi-health/health-outcomes.png",
       "images/powerbi-health/performance-review.png",
     ],
     captions: [
       "Health Overview Dashboard",
       "Disease Trends Analysis",
       "Health Outcomes",
       "Performance Review",
     ],
     github: "#",
    },
   "powerbi-new-project": {
     title: "HealthScope Indonesia: Analisis Kesehatan Nasional 2010–2024",
     images: [
       "project/project9/overview nasional.png",
       "project/project9/provincial comparison.png",
       "project/project9/factor analysis.png",
       "project/project9/insight.png",
     ],
     captions: [
       "Overview Nasional",
       "Provincial Comparison",
       "Factor Analysis",
       "Insight",
     ],
     github: "#",
    },
 };

// Full gallery state
let currentFullGalleryProject = null;
let currentFullGalleryIndex = 0;

// Adjust gallery height to fit active image
function adjustGalleryHeight(gallery) {
  const activeImage = gallery.querySelector(".project-screenshot.active");
  if (activeImage) {
    // Temporarily make image visible to get its natural height
    const img = new Image();
    img.onload = function () {
      const aspectRatio = img.naturalHeight / img.naturalWidth;
      const galleryWidth = gallery.offsetWidth;
      const neededHeight = galleryWidth * aspectRatio;
      gallery.style.height = Math.max(250, neededHeight) + "px";
    };
    img.src = activeImage.src;
  }
}

// Adjust all project gallery heights on load
function adjustAllGalleries() {
  document.querySelectorAll(".project-gallery").forEach((gallery) => {
    adjustGalleryHeight(gallery);
  });
}

// Slide gallery for project cards (mini slider)
function slideGallery(button, direction) {
  const gallery = button.closest(".project-gallery");
  const slider = gallery.querySelector(".project-image-slider");
  const screenshots = slider.querySelectorAll(".project-screenshot");
  const dots = gallery.querySelectorAll(".gallery-dots .dot");

  let activeIndex = 0;
  screenshots.forEach((img, index) => {
    if (img.classList.contains("active")) {
      activeIndex = index;
    }
  });

  let newIndex = activeIndex + direction;
  if (newIndex < 0) newIndex = screenshots.length - 1;
  if (newIndex >= screenshots.length) newIndex = 0;

  screenshots[activeIndex].classList.remove("active");
  screenshots[newIndex].classList.add("active");

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[newIndex].classList.add("active");

  // Adjust height after slide change
  setTimeout(() => adjustGalleryHeight(gallery), 50);
}

// Go to specific slide in project card
function goToSlide(dot, index) {
  const gallery = dot.closest(".project-card");
  const slider = gallery.querySelector(".project-image-slider");
  const screenshots = slider.querySelectorAll(".project-screenshot");
  const dots = gallery.querySelectorAll(".gallery-dots .dot");

  screenshots.forEach((img) => img.classList.remove("active"));
  screenshots[index].classList.add("active");

  dots.forEach((d) => d.classList.remove("active"));
  dot.classList.add("active");

  // Adjust height after slide change
  setTimeout(() => adjustGalleryHeight(gallery), 50);
}

// Open Full Gallery Modal
function openFullGallery(projectName) {
  const gallery = projectGalleries[projectName];
  if (!gallery) return;

  currentFullGalleryProject = projectName;
  currentFullGalleryIndex = 0;

  const modal = document.getElementById("fullGalleryModal");
  const galleryTitle = document.getElementById("gallery-title");
  const galleryImage = document.getElementById("fullGalleryImage");
  const galleryCaption = document.getElementById("fullGalleryCaption");
  const galleryDots = document.getElementById("fullGalleryDots");

  // Set title
  galleryTitle.textContent = gallery.title;

  // Set initial image
  galleryImage.src = gallery.images[0];
  galleryCaption.textContent = gallery.captions[0];

  // Generate dots
  galleryDots.innerHTML = "";
  gallery.images.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "dot" + (index === 0 ? " active" : "");
    dot.onclick = () => goToFullGalleryImage(index);
    galleryDots.appendChild(dot);
  });

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close Full Gallery Modal
function closeFullGallery() {
  const modal = document.getElementById("fullGalleryModal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
  currentFullGalleryProject = null;
  currentFullGalleryIndex = 0;
}

// Change full gallery image
function changeFullGalleryImage(direction) {
  if (!currentFullGalleryProject) return;

  const gallery = projectGalleries[currentFullGalleryProject];
  let newIndex = currentFullGalleryIndex + direction;

  if (newIndex < 0) newIndex = gallery.images.length - 1;
  if (newIndex >= gallery.images.length) newIndex = 0;

  goToFullGalleryImage(newIndex);
}

// Go to specific image in full gallery
function goToFullGalleryImage(index) {
  const gallery = projectGalleries[currentFullGalleryProject];
  const galleryImage = document.getElementById("fullGalleryImage");
  const galleryCaption = document.getElementById("fullGalleryCaption");
  const galleryDots = document.getElementById("fullGalleryDots");

  currentFullGalleryIndex = index;

  // Fade out effect
  galleryImage.style.opacity = "0";

  setTimeout(() => {
    galleryImage.src = gallery.images[index];
    galleryCaption.textContent = gallery.captions[index];
    galleryImage.style.opacity = "1";

    // Update dots
    const dots = galleryDots.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }, 200);
}

// Keyboard navigation for full gallery
document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("fullGalleryModal");
  if (!modal.classList.contains("active")) return;

  if (e.key === "Escape") {
    closeFullGallery();
  } else if (e.key === "ArrowLeft") {
    changeFullGalleryImage(-1);
  } else if (e.key === "ArrowRight") {
    changeFullGalleryImage(1);
  }
});

// Close modal when clicking outside image
document.getElementById("fullGalleryModal")?.addEventListener("click", (e) => {
  if (e.target.id === "fullGalleryModal") {
    closeFullGallery();
  }
});

// ========================================
// Contact Form with FormSubmit.co (100% Free)
// ========================================

const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const formMessage = document.getElementById("formMessage");

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validateForm = () => {
  let isValid = true;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  document.querySelectorAll(".error-message").forEach((el) => {
    el.textContent = "";
    el.classList.remove("show");
  });

  if (name === "") {
    document.getElementById("name-error").textContent = "Name is required";
    document.getElementById("name-error").classList.add("show");
    isValid = false;
  } else if (name.length < 2) {
    document.getElementById("name-error").textContent =
      "Name must be at least 2 characters";
    document.getElementById("name-error").classList.add("show");
    isValid = false;
  }

  if (email === "") {
    document.getElementById("email-error").textContent = "Email is required";
    document.getElementById("email-error").classList.add("show");
    isValid = false;
  } else if (!validateEmail(email)) {
    document.getElementById("email-error").textContent =
      "Please enter a valid email address";
    document.getElementById("email-error").classList.add("show");
    isValid = false;
  }

  if (message === "") {
    document.getElementById("message-error").textContent =
      "Message is required";
    document.getElementById("message-error").classList.add("show");
    isValid = false;
  } else if (message.length < 10) {
    document.getElementById("message-error").textContent =
      "Message must be at least 10 characters";
    document.getElementById("message-error").classList.add("show");
    isValid = false;
  }

  return isValid;
};

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (!validateForm()) return;

    const btnText = submitBtn.querySelector(".btn-text");
    const btnLoading = submitBtn.querySelector(".btn-loading");
    btnText.style.display = "none";
    btnLoading.style.display = "flex";
    submitBtn.disabled = true;

    try {
      const formData = new FormData(contactForm);

      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Web3Forms Response:", result);

      if (response.ok || result.success) {
        formMessage.textContent =
          "✓ Message sent successfully! I will get back to you soon.";
        formMessage.className = "form-message success";
        formMessage.style.display = "block";
        contactForm.reset();
        setTimeout(() => {
          formMessage.style.display = "none";
        }, 5000);
      } else {
        throw new Error(result.message || "Failed to send");
      }
    } catch (error) {
      console.error("Error:", error);
      formMessage.textContent =
        "✗ Failed to send. Email me directly: dalemasan10@gmail.com";
      formMessage.className = "form-message error";
      formMessage.style.display = "block";
    } finally {
      btnText.style.display = "inline";
      btnLoading.style.display = "none";
      submitBtn.disabled = false;
    }
  });

  ["name", "email", "message"].forEach((field) => {
    document.getElementById(field).addEventListener("input", () => {
      const errorEl = document.getElementById(`${field}-error`);
      if (errorEl.classList.contains("show")) {
        errorEl.classList.remove("show");
        errorEl.textContent = "";
      }
    });
  });
}

// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Download CV Button
const downloadCVBtn = document.getElementById("downloadCV");

if (downloadCVBtn) {
  downloadCVBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Maaf CV saya belum diupload");
  });
}

// Stats Counter Animation
const stats = document.querySelectorAll(".stat h3");
let statsAnimated = false;

const animateStats = () => {
  const statsSection = document.querySelector(".about-stats");
  if (!statsSection) return;

  const position = statsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (position < screenPosition && !statsAnimated) {
    statsAnimated = true;

    stats.forEach((stat) => {
      const target = +stat.getAttribute("data-target");
      const increment = target / 50;
      let count = 0;

      const updateCount = () => {
        if (count < target) {
          count += increment;
          stat.textContent = Math.ceil(count) + "+";
          setTimeout(updateCount, 40);
        } else {
          stat.textContent = target + "+";
        }
      };

      updateCount();
    });
  }
};

window.addEventListener("scroll", animateStats);
animateStats(); // Check on load
