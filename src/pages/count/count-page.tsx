import { useState } from "react"

export default function CountPage() {
    const [count, setCount] = useState<number>(0)
    return (
        <div>
            {count}
            <button type='button' onClick={() => setCount(prev => prev + 1)}>버튼</button>
        </div>
    )
}