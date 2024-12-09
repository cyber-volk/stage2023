import { ImageLoaderProps } from 'next/image'

// Custom image loader for optimized images
export const customImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

// Lazy loading configuration for components
export const lazyLoadConfig = {
  threshold: 0.1,
  rootMargin: '50px',
}

// Memoization helper for expensive computations
export function memoize<T>(fn: (...args: any[]) => T): (...args: any[]) => T {
  const cache = new Map()
  
  return (...args: any[]) => {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      return cache.get(key)
    }
    
    const result = fn(...args)
    cache.set(key, result)
    return result
  }
}

// Debounce helper for performance-intensive operations
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  ms: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout

  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), ms)
  }
}
