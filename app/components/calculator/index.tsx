'use client'

import { useWatch } from 'react-hook-form';

function totalCal(results) {
    let totalValue = 0;

    for (const key in results) {
        for (const value in results[key]) {
            if (typeof results[key][value] === "string") {
                const output = parseInt(results[key][value], 10);
                totalValue = totalValue + (Number.isNaN(output) ? 0 : output);
            } else {
                totalValue = totalValue + totalCal(results[key][value], totalValue);
            }
        }
    }
    return totalValue;
}

function totalValue(results : any) {
    let totalValue = 0;
    for (const key in results) {
        for (const value in results[key]) {
            if (typeof results[key].price === "string" && typeof results[key].quantity === "string") {
                const price = parseInt(results[key].price, 10);
                const quantity = parseInt(results[key].quantity, 10);
                const output = (Number.isNaN(price) ? 0 : price) * (Number.isNaN(quantity) ? 0 : quantity) * 0.5;
                totalValue = totalValue + (Number.isNaN(output) ? 0 : output);
            } else {
                // if contains nested object
                totalValue = totalValue + totalValue(results[key][value], totalValue);
            }
        }
    }
    return totalValue;
}



export const Calculator = ({control, setValue}) => {
    const results = useWatch({ control, name: 'sales' });
    const output = totalCal(results);
    const outputzz = totalValue(results);

    setValue('output', output);
    setValue('outputzz', outputzz);

    return (
        <div>
            <h1>Total of All Number That Appears: {output}</h1>
            <h1>Total of Row Product: {outputzz}</h1>
        </div>
    )
} 