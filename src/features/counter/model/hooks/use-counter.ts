import { useState } from "react"

interface UseCounterProps {
    min?: number
    max?: number
    initial?: number
}

function clamp(n: number, min?: number, max?: number) {
    if (min !== undefined) n = Math.max(n, min)
    if (max !== undefined) n = Math.min(n, max)
    return n
}

export function useCounter({ min, max, initial = 0 }: UseCounterProps = {}) {
    const [count, setCount] = useState(() => clamp(initial, min, max))

    const increment = () => setCount(prev => clamp(prev + 1, min, max))
    const decrement = () => setCount(prev => clamp(prev - 1, min, max))
    const reset = () => setCount(clamp(initial, min, max))

    const formatted = count.toLocaleString()

    return { count, increment, decrement, reset, formatted }
}