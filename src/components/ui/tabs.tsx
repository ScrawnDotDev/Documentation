'use client';
import * as Primitive from '@radix-ui/react-tabs';
import { cn } from '../../lib/cn';

const TabsList = Primitive.List;
const TabsTrigger = Primitive.Trigger;
const TabsContent = Primitive.Content;

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.Tabs>) {
  return (
    <Primitive.Root
      className={cn('flex flex-col', className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
