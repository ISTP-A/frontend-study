import { useState } from "react"
import { Button } from "../../components/ui/button"

export default function CounterPage() {
    const [count, setCount] = useState<number>(0)

    const handleUpCount = () => setCount(prev => prev + 1)
    const handleDownCount = () => setCount(prev => prev - 1)
    const handleResetCount = () => setCount(0)
    return (
        <div className="max-w-screen-md mx-auto flex flex-col gap-2">
            <p>{count}</p>
            <div className="inline-flex items-center gap-1">
                <Button size='icon' onClick={handleDownCount}>-</Button>
                <Button variant='outline' size='sm' onClick={handleResetCount}>RESET</Button>
                <Button size='icon' onClick={handleUpCount}>+</Button>
            </div>
        </div>
    )
}