interface CounterViewerProps {
    count: string | number
}
export function CounterViewer({ count }: CounterViewerProps) {
    return (
        <div className="inline-flex items-center justify-center h-10 rounded-md bg-primary/10 border border-primary/10">
            <span className="text-primary font-semibold">{count}</span>
        </div>
    )
}