import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Enter task'),
  minutesAmount: zod
    .number()
    .min(5, 'Timer has a minimum of 5 minutes.')
    .max(60, 'Timer has a maximum of 60 minutes.'),
})

export function Home() {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  })

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisable = !task
  return (
    <HomeContainer>
<form onSubmit={handleSubmit(handleCreateNewCycle)}>        <FormContainer>
          <label htmlFor="task">Working on</label>
          <TaskInput 
          id="task" 
          list="task-suggestions" 
          placeholder="Name your task"
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
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisable} type="submit">          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}