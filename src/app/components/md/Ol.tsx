import React, { type ReactNode } from "react";

interface OrderedListProps {
  children: ReactNode;
}

const OrderedList = ({ children }: OrderedListProps) => {
  return (
    <ul className="mt-2 list-decimal pl-8 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 marker:text-neutral-300 dark:marker:text-neutral-500">
      {children}
    </ul>
  );
};

export default OrderedList;