'use client';

import { useForm , useFieldArray } from 'react-hook-form';
import { Calculator } from './components/calculator';
import {
  Center,
  Button,
  VStack,
  Text
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
      <Center mt={100}>
        <VStack>
          <Text fontSize="xl" as="b" mb={10}>
            Calculating Array Total with React Hook Form
          </Text>
          <PriceArray 
            {...{
              control,
              register,
              setValue,
              errors
            }}
          />
          <Button type='submit'>Submit</Button>
        </VStack>
      </Center>
    </form>
  );
}
