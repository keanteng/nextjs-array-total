'use client';

import { Calculator } from "../calculator";
import { useFieldArray } from "react-hook-form";
import {
    Input,
    Button,
    VStack,
    HStack,
    Tooltip
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
                    <HStack>
                    <Input
                        {...register(`sales.${index}.price`)}
                        type="number"
                        placeholder="Price"
                    />
                    <Tooltip label="Quantity">
                    <Input
                        {...register(`sales.${index}.quantity`)}
                        type="number"
                        placeholder="Quantity"
                        defaultValue="0"
                    />
                    </Tooltip>
                    
                    <Button type="button" onClick={() => remove(index)} mr={5} w={150}>Delete</Button>
                    </HStack>
                </div>
            ))}
            <Button type="button" onClick={() => append({})}>Add</Button>
            <Calculator control={control} setValue={setValue} />
        </VStack>
    )
}