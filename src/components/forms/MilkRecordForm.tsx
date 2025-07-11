
"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { MilkSession } from '@/lib/types';

const milkRecordFormSchema = z.object({
  quantity: z.coerce.number().min(0.1, { message: "Quantity must be greater than 0." }),
  fat: z.coerce.number().min(0, { message: "Fat % cannot be negative." }).max(100, { message: "Fat % cannot exceed 100."}),
  snf: z.coerce.number().min(0, { message: "SNF cannot be negative." }),
  degree: z.coerce.number().min(0, {message: "Degree must be a positive number."}),
  pricePerLiter: z.coerce.number().min(0, {message: "Price per liter must be a positive number."}),
  session: z.enum(['morning', 'evening'], { required_error: "You need to select a milk session." }),
});

export type MilkRecordFormValues = z.infer<typeof milkRecordFormSchema>;

interface MilkRecordFormProps {
  onSubmit: (data: MilkRecordFormValues) => void;
  isLoading?: boolean;
}

export default function MilkRecordForm({ onSubmit, isLoading = false }: MilkRecordFormProps) {
  const form = useForm<MilkRecordFormValues>({
    resolver: zodResolver(milkRecordFormSchema),
    defaultValues: {
      quantity: '' as unknown as number, 
      fat: '' as unknown as number,      
      snf: '' as unknown as number,
      degree: '' as unknown as number,
      pricePerLiter: '' as unknown as number,
      session: 'morning' as MilkSession,
    },
  });

  const handleFormSubmit = (values: MilkRecordFormValues) => {
    onSubmit(values);
    form.reset(); 
    form.setValue('session', 'morning'); // Reset session to default after submit
  };

  return (
    <Card className="mt-8 shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Add New Milk Record</CardTitle>
        <CardDescription>Enter the details for the new milk record. Total price will be calculated automatically.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity (Liters)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" placeholder="e.g. 5.5" {...field} onChange={e => field.onChange(e.target.value === '' ? '' : parseFloat(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fat Percentage (%)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" placeholder="e.g. 6.5" {...field} onChange={e => field.onChange(e.target.value === '' ? '' : parseFloat(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="snf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SNF (Solids-Not-Fat)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" placeholder="e.g. 8.5" {...field} onChange={e => field.onChange(e.target.value === '' ? '' : parseFloat(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="degree"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Degree</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" placeholder="e.g. 28.0" {...field} onChange={e => field.onChange(e.target.value === '' ? '' : parseFloat(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pricePerLiter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price / Liter (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" placeholder="e.g. 35.50" {...field} onChange={e => field.onChange(e.target.value === '' ? '' : parseFloat(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="session"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Session</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="morning" />
                          </FormControl>
                          <FormLabel className="font-normal">Morning</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="evening" />
                          </FormControl>
                          <FormLabel className="font-normal">Evening</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
              {isLoading ? 'Adding Record...' : 'Add Milk Record'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
