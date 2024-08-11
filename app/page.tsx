'use client';

import { useForm , useFieldArray } from 'react-hook-form';
import { Calculator } from './components/calculator';
import {
  Center,
  Button
} from '@chakra-ui/react';
import PriceArray from './components/priceArray';

export default function Home() {
  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Center>
        <PriceArray 
          {...{
            control,
            register,
            setValue,
            errors
          }}
        />
      </Center>
      <Button type='submit'>Submit</Button>
    </form>
  );
}
