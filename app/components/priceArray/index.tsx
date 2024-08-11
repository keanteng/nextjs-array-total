'use client';

import { Calculator } from "../calculator";
import { useFieldArray } from "react-hook-form";
import {
    Input,
    Button,
    VStack
} from '@chakra-ui/react';

export default function PriceArray({control, register, setValue}) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'sales',
    }) ;

    return (
        <VStack>
            {fields.map((field, index) => (
                <div key={field.id}>
                    <Input
                        {...register(`sales.${index}.price`)}
                        type="number"
                        placeholder="Price"
                    />
                    <Input
                        {...register(`sales.${index}.quantity`)}
                        type="number"
                        placeholder="Quantity"
                        defaultValue="1"
                    />
                    
                    <Button type="button" onClick={() => remove(index)}>Delete</Button>
                </div>
            ))}
            <Button type="button" onClick={() => append({})}>Add</Button>
            <Calculator control={control} setValue={setValue} />
        </VStack>
    )
}