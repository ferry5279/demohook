import { useState, useEffect } from 'react'
export default function useMouse() {
    const [data, setData] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const _b = document.body;
        const fn = event => {
            setData({...data, ... { x: event.clientX, y: event.clientY } })
        }
        _b.addEventListener('mousemove', fn)
        return () => _b.removeEventListener('mousemove', fn)
    })
    return data
}