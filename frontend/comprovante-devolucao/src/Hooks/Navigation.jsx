import { useState } from "react";

export function Navigation(steps) {
    const [currentStep, setCurrentSetp] = useState(0);

    function changeStep(i, e) {
        if(e) e.preventDefault();

        if(i < 0 || i>= steps.length) return

        setCurrentSetp(i);
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
    };
}