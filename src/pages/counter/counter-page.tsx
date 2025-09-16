import { useCounter } from "../../features/counter/model/hooks/use-counter"
import { CounterController } from "../../features/counter/ui/counter-controller"
import { CounterViewer } from "../../features/counter/ui/counter-viewer"

export default function CounterPage() {
    const counter = useCounter({ initial: 1000 })
    return (
        <div className="max-w-40 mx-auto flex flex-col gap-2">
            <CounterViewer
                count={counter.formatted}
            />
            <CounterController
                onIncrement={counter.increment}
                onDecrement={counter.decrement}
                onReset={counter.reset}
            />
        </div>
    )
}