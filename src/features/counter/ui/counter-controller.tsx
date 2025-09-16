import { Button } from "../../../components/ui/button";

interface CounterControllerProps {
    onIncrement: () => void
    onDecrement: () => void
    onReset: () => void
}

export function CounterController({
    onIncrement,
    onDecrement,
    onReset,
}: CounterControllerProps) {
    return (
        <div className="inline-flex items-center gap-1">
            <Button
                size='icon'
                onClick={onDecrement}
            >
                -
            </Button>
            <Button
                variant='outline'
                size='sm'
                className="flex-1"
                onClick={onReset}
            >
                RESET
            </Button>
            <Button
                size='icon'
                onClick={onIncrement}
            >
                +
            </Button>
        </div>
    )
}