// Apple-like scroll effects and animations
class ScrollEffects {
  constructor() {
    this.scrollY = 0
    this.ticking = false
    this.elements = new Map()
    this.init()
  }

  init() {
    this.setupIntersectionObserver()
    this.setupScrollListener()
    this.setupParallaxElements()
    this.setupFadeElements()
    this.setupScaleElements()
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rootMargin: "-10% 0px -10% 0px",
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target
        const ratio = entry.intersectionRatio

        if (entry.isIntersecting) {
          element.classList.add("in-view")

          // Fade in effect
          if (element.classList.contains("fade-in")) {
            element.style.opacity = Math.min(ratio * 2, 1)
            element.style.transform = `translateY(${Math.max(0, (1 - ratio * 2) * 30)}px)`
          }

          // Scale effect
          if (element.classList.contains("scale-in")) {
            const scale = 0.8 + ratio * 0.2
            element.style.transform = `scale(${Math.min(scale, 1)})`
            element.style.opacity = Math.min(ratio * 1.5, 1)
          }

          // Slide effects
          if (element.classList.contains("slide-left")) {
            element.style.transform = `translateX(${Math.max(0, (1 - ratio * 1.5) * 50)}px)`
            element.style.opacity = Math.min(ratio * 1.5, 1)
          }

          if (element.classList.contains("slide-right")) {
            element.style.transform = `translateX(${Math.min(0, (ratio * 1.5 - 1) * -50)}px)`
            element.style.opacity = Math.min(ratio * 1.5, 1)
          }

          // Stagger children
          if (element.classList.contains("stagger-children")) {
            const children = element.children
            Array.from(children).forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("animate-in")
              }, index * 100)
            })
          }
        } else {
          element.classList.remove("in-view")
        }
      })
    }, observerOptions)

    // Observe all animated elements
    document.addEventListener("DOMContentLoaded", () => {
      const animatedElements = document.querySelectorAll(
        ".fade-in, .scale-in, .slide-left, .slide-right, .stagger-children, .parallax-element",
      )
      animatedElements.forEach((el) => this.observer.observe(el))
    })
  }

  setupScrollListener() {
    let lastScrollY = 0
    let scrollDirection = "down"

    window.addEventListener(
      "scroll",
      () => {
        const currentScrollY = window.scrollY
        scrollDirection = currentScrollY > lastScrollY ? "down" : "up"
        lastScrollY = currentScrollY

        if (!this.ticking) {
          requestAnimationFrame(() => {
            this.updateParallax(currentScrollY, scrollDirection)
            this.updateNavbar(currentScrollY, scrollDirection)
            this.ticking = false
          })
          this.ticking = true
        }
      },
      { passive: true },
    )
  }

  setupParallaxElements() {
    document.addEventListener("DOMContentLoaded", () => {
      // Hero background parallax
      const heroBackground = document.querySelector(".hero-bg")
      if (heroBackground) {
        this.elements.set("hero-bg", {
          element: heroBackground,
          speed: 0.5,
          type: "background",
        })
      }

      // Service card images
      const serviceImages = document.querySelectorAll(".service-image img")
      serviceImages.forEach((img, index) => {
        this.elements.set(`service-img-${index}`, {
          element: img,
          speed: 0.3,
          type: "transform",
        })
      })

      // Feature icons
      const featureIcons = document.querySelectorAll(".feature-icon")
      featureIcons.forEach((icon, index) => {
        this.elements.set(`feature-icon-${index}`, {
          element: icon,
          speed: 0.2,
          type: "float",
        })
      })
    })
  }

  setupFadeElements() {
    document.addEventListener("DOMContentLoaded", () => {
      // Add fade classes to elements
      const fadeElements = [".section-header", ".service-card", ".feature", ".hero-content > *", ".cta-content > *"]

      fadeElements.forEach((selector) => {
        const elements = document.querySelectorAll(selector)
        elements.forEach((el, index) => {
          el.classList.add("fade-in")
          el.style.transitionDelay = `${index * 0.1}s`
        })
      })
    })
  }

  setupScaleElements() {
    document.addEventListener("DOMContentLoaded", () => {
      // Add scale effects to cards
      const scaleElements = document.querySelectorAll(".service-card, .feature")
      scaleElements.forEach((el) => {
        el.classList.add("scale-in")
      })
    })
  }

  updateParallax(scrollY, direction) {
    this.elements.forEach((config, key) => {
      const { element, speed, type } = config
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top + scrollY
      const elementHeight = rect.height
      const windowHeight = window.innerHeight

      // Only apply parallax when element is in viewport
      if (rect.bottom >= 0 && rect.top <= windowHeight) {
        const progress = (scrollY - elementTop + windowHeight) / (windowHeight + elementHeight)
        const clampedProgress = Math.max(0, Math.min(1, progress))

        switch (type) {
          case "background":
            const bgOffset = (scrollY - elementTop) * speed
            element.style.transform = `translate3d(0, ${bgOffset}px, 0) scale(1.1)`
            break

          case "transform":
            const transformOffset = (scrollY - elementTop) * speed
            element.style.transform = `translate3d(0, ${transformOffset}px, 0)`
            break

          case "float":
            const floatOffset = Math.sin(scrollY * 0.01 + Number.parseInt(key.split("-")[2]) || 0) * 10
            const parallaxOffset = (scrollY - elementTop) * speed
            element.style.transform = `translate3d(0, ${parallaxOffset + floatOffset}px, 0)`
            break
        }
      }
    })
  }

  updateNavbar(scrollY, direction) {
    const navbar = document.querySelector(".navbar")
    if (!navbar) return

    if (scrollY > 100) {
      navbar.classList.add("navbar-scrolled")
    } else {
      navbar.classList.remove("navbar-scrolled")
    }

    // Hide/show navbar based on scroll direction
    if (scrollY > 200) {
      if (direction === "down") {
        navbar.style.transform = "translateY(-100%)"
      } else {
        navbar.style.transform = "translateY(0)"
      }
    } else {
      navbar.style.transform = "translateY(0)"
    }
  }

  // Smooth scroll to element
  scrollToElement(target, offset = 0) {
    const element = typeof target === "string" ? document.querySelector(target) : target
    if (!element) return

    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }

  // Add magnetic effect to buttons
  addMagneticEffect(selector) {
    document.addEventListener("DOMContentLoaded", () => {
      const elements = document.querySelectorAll(selector)

      elements.forEach((el) => {
        el.addEventListener("mousemove", (e) => {
          const rect = el.getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width / 2
          const y = e.clientY - rect.top - rect.height / 2

          el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`
        })

        el.addEventListener("mouseleave", () => {
          el.style.transform = "translate(0, 0) scale(1)"
        })
      })
    })
  }
}

// Initialize scroll effects
const scrollEffects = new ScrollEffects()

// Add magnetic effects to buttons
scrollEffects.addMagneticEffect(".btn")

// Smooth scroll for anchor links
document.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute("href"))
      if (target) {
        scrollEffects.scrollToElement(target, 100)
      }
    })
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")

  // Trigger hero animations
  setTimeout(() => {
    const heroElements = document.querySelectorAll(".hero-content > *")
    heroElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("animate-in")
      }, index * 200)
    })
  }, 500)
})

// Performance optimization
let resizeTimer
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    // Recalculate positions after resize
    scrollEffects.elements.clear()
    scrollEffects.setupParallaxElements()
  }, 250)
})
