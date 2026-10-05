'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'

interface Category {
  id: string
  name: string
  slug: string
}

export default function BlogSearchFilter({ categories }: { categories: Category[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const currentQuery = searchParams.get('q') || ''
  const currentCategory = searchParams.get('category') || ''

  const [searchQuery, setSearchQuery] = useState(currentQuery)
  const [debouncedQuery] = useDebounce(searchQuery, 300)

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    
    if (debouncedQuery) {
      params.set('q', debouncedQuery)
    } else {
      params.delete('q')
    }

    router.push(`/blog?${params.toString()}`, { scroll: false })
  }, [debouncedQuery, router])

  const handleCategoryClick = (categoryId: string) => {
    const params = new URLSearchParams(searchParams)
    
    if (categoryId) {
      params.set('category', categoryId)
    } else {
      params.delete('category')
    }
    
    // Reset page if we had pagination, but here we just push
    router.push(`/blog?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
      {/* Search Input */}
      <div className="relative flex-1 max-w-md group transition-soft opacity-100 translate-y-0">
        <span className="absolute left-0 top-1/2 -translate-y-1/2 material-symbols-outlined text-[var(--color-outline)] group-focus-within:text-[var(--color-secondary)] transition-colors">search</span>
        <input 
          className="w-full bg-transparent border-0 border-b border-[var(--color-outline)]/30 focus:border-[var(--color-secondary)] focus:ring-0 pl-8 pb-3 text-[16px] font-sans placeholder:text-[var(--color-outline)]/60 transition-all outline-none" 
          placeholder="Buscar un artículo..." 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {/* Filter Chips */}
      <div className="flex overflow-x-auto gap-3 hide-scrollbar pb-2 md:pb-0">
        <button 
          onClick={() => handleCategoryClick('')}
          className={`whitespace-nowrap px-6 py-2 text-[10px] tracking-[0.1em] uppercase rounded-full font-bold font-sans transition-all ${
            !currentCategory 
              ? 'bg-[var(--color-primary)] text-white' 
              : 'bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-secondary)]/10 hover:text-[var(--color-secondary)]'
          }`}
        >
          Todos
        </button>
        {categories.map((cat) => (
          <button 
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={`whitespace-nowrap px-6 py-2 text-[10px] tracking-[0.1em] uppercase rounded-full font-bold font-sans transition-all ${
              currentCategory === cat.id 
                ? 'bg-[var(--color-primary)] text-white' 
                : 'bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-secondary)]/10 hover:text-[var(--color-secondary)]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  )
}
