import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useLoginMutation } from '@/hooks/auth/login/mutations'
import { motion } from 'framer-motion'

const formSchema = z.object({
  email: z.string().min(1),
  password: z.string().trim().min(8),
})

export default function LoginForm() {
  const { mutate: loginMutation } = useLoginMutation()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      loginMutation(values)
    } catch (error) {
      console.error(error)
      toast.error('Failed to submit the form. Please try again.')
    }
  }

  const fieldVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  }

  return (
    <section className="w-[25rem]">
      <Form {...form}>
        <motion.form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl mx-auto py-10 p-8 rounded-lg shadow-xl bg-card text-card-foreground font-sans"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {['email', 'password'].map((name, i) => (
            <FormField
              key={name}
              control={form.control}
              name={name as 'email' | 'password'}
              render={({ field }) => (
                <motion.div
                  custom={i}
                  variants={fieldVariant}
                  initial="hidden"
                  animate="visible"
                >
                  <FormItem>
                    <FormLabel>
                      {name === 'email' ? 'E-mail' : 'Password'}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={
                          name === 'email'
                            ? 'Enter your email address'
                            : '*********'
                        }
                        type={name}
                        {...field}
                        className="border border-border focus:border-ring focus:ring focus:ring-ring/30 transition-all"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </motion.div>
              )}
            />
          ))}

          <motion.div
            custom={2}
            variants={fieldVariant}
            initial="hidden"
            animate="visible"
          >
            <Button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-md shadow transition-all hover:bg-primary/90"
            >
              Submit
            </Button>
          </motion.div>
        </motion.form>
      </Form>
    </section>
  )
}
