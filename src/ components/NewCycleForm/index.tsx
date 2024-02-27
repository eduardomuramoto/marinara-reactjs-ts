import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Enter Task'),
  minutesAmount: zod
    .number()
    .min(5, 'The timer minimum is 5 minutes')
    .max(60, 'The timer maximum is 60 minutes'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  return (
    <FormContainer>
          <label htmlFor="task">Working on</label>
          <TaskInput 
          id="task" 
          list="task-suggestions" 
          placeholder="Name your task"
          disabled={!!activeCycle}
          {...register('task')} 
          />
          <datalist id="task-suggestions">
            <option value="Study" />
            <option value="Project" />
            <option value="Brainstorm" />
          </datalist>
          <label htmlFor="minutesAmount">during</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            disabled={!!activeCycle}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutes.</span>
    </FormContainer>
  )
}