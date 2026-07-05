import { useEffect } from 'react'

// Anima con un fade-in + slide los elementos con la clase `.reveal`
// a medida que entran en el viewport. Usa IntersectionObserver (sin dependencias).
export function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')

    // Respeta la preferencia de menos movimiento.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
