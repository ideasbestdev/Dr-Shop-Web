import { Dispatch, SetStateAction, useState } from 'react'

interface UseCounterOutput {
    count: number
    min?: number
    max?: number
    increment: () => void
    decrement: () => void
    reset: () => void
    setCount: Dispatch<SetStateAction<number>>
}

function useCounter(initialValue?: number, max?: number, min?: number): UseCounterOutput {
    const [count, setCount] = useState(initialValue || 0)

    const increment = () => setCount(x => (max != undefined && x + 1 >= max ? max : x + 1))
    const decrement = () => setCount(x => (min != undefined && x - 1 < min ? min : x - 1))
    const reset = () => setCount(initialValue || 0)

    return {
        count,
        increment,
        decrement,
        reset,
        setCount,
        min,
        max,
    }
}

export default useCounter