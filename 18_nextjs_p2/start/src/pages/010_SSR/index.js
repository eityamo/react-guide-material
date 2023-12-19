import { useState } from "react";

export default function SSR() {
    console.log('hello');
    const [state, setState] = useState('bye');
    const val = 0;
    return (<h3>{state}</h3>)
}