import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'
import { useFormContext } from 'react-hook-form'
import { useContext } from 'react'
export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

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