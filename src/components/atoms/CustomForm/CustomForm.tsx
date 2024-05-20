import type { ComponentPropsWithoutRef, FormEvent } from 'react';

const CustomForm = ({
  onSubmit,
  ...props
}: ComponentPropsWithoutRef<'form'>) => {
  const preventDefaultSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit && onSubmit(event);
  };
  return (
    <>
      <form {...props} onSubmit={preventDefaultSubmit} />
    </>
  );
};

export default CustomForm;
