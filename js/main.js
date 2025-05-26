// Ensure page loads from top on navigation
window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0)
})

// Force scroll to top on page load
window.addEventListener("load", () => {
  // Small delay to ensure page is fully loaded
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 50)
})

// Also handle DOMContentLoaded for faster response
document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0)
})

// Handle navigation links to ensure scroll to top
document.addEventListener("DOMContentLoaded", () => {
  // Get all navigation links (both desktop and mobile)
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link, .footer-links a, .btn[href]")

  navLinks.forEach((link) => {
    // Only handle links that navigate to other pages (not anchors)
    if (link.href && !link.href.includes("#") && link.href !== window.location.href) {
      link.addEventListener("click", (e) => {
        // Allow the default navigation to happen
        // but ensure we scroll to top before leaving
        window.scrollTo(0, 0)
      })
    }
  })
})

// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileNav = document.getElementById("mobileNav")

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("active")

      // Toggle hamburger animation
      const hamburgers = mobileMenuBtn.querySelectorAll(".hamburger")
      hamburgers.forEach((hamburger, index) => {
        if (mobileNav.classList.contains("active")) {
          if (index === 0) {
            hamburger.style.transform = "rotate(45deg) translate(5px, 5px)"
          } else if (index === 1) {
            hamburger.style.opacity = "0"
          } else if (index === 2) {
            hamburger.style.transform = "rotate(-45deg) translate(7px, -6px)"
          }
        } else {
          hamburger.style.transform = ""
          hamburger.style.opacity = ""
        }
      })
    })
  }

  // Close mobile menu when clicking on links
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active")

      // Reset hamburger
      const hamburgers = mobileMenuBtn.querySelectorAll(".hamburger")
      hamburgers.forEach((hamburger) => {
        hamburger.style.transform = ""
        hamburger.style.opacity = ""
      })

      // Scroll to top for page navigation
      if (!link.href.includes("#")) {
        window.scrollTo(0, 0)
      }
    })
  })
})

// Smooth scrolling for anchor links (same page navigation)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Active navigation link highlighting
function updateActiveNavLink() {
  const currentPath = window.location.pathname
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.classList.remove("active")
    const linkPath = new URL(link.href).pathname

    if (
      currentPath === linkPath ||
      (currentPath === "/" && linkPath.includes("index.html")) ||
      (currentPath.includes("index") && linkPath.includes("index.html"))
    ) {
      link.classList.add("active")
    }
  })
}

// Update active nav link on page load
document.addEventListener("DOMContentLoaded", updateActiveNavLink)

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in-up")
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(".service-card, .feature, .section-header")
  animateElements.forEach((el) => observer.observe(el))
})

// Form handling (for contact forms)
function handleFormSubmit(event) {
  event.preventDefault()

  // Get form data
  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData)

  // Here you would typically send the data to your server
  console.log("Form submitted:", data)

  // Show success message
  alert("Thank you for your message! We'll get back to you soon.")

  // Reset form
  event.target.reset()
}

// Add form event listeners
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form")
  forms.forEach((form) => {
    form.addEventListener("submit", handleFormSubmit)
  })
})

// Lazy loading for images
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]")

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Initialize lazy loading
document.addEventListener("DOMContentLoaded", lazyLoadImages)

// Enhanced navbar background on scroll
function handleNavbarScroll() {
  const navbar = document.querySelector(".navbar")

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
}

window.addEventListener("scroll", handleNavbarScroll)

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply debouncing to scroll handler
window.addEventListener("scroll", debounce(handleNavbarScroll, 10))

// Handle browser back/forward buttons to ensure scroll to top
window.addEventListener("popstate", () => {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 50)
})

// Additional fallback for ensuring scroll to top
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual"
}
