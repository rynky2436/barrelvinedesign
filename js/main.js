// Simple main.js - no complex effects
document.addEventListener("DOMContentLoaded", () => {
  // Ensure page starts at top
  window.scrollTo(0, 0)

  // Simple mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileNav = document.getElementById("mobileNav")

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("active")
    })

    // Close mobile menu when clicking on links
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active")
      })
    })
  }
})

// Ensure page loads from top on navigation
window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0)
})
