import { useState } from 'react'
import { EffectCallback } from './components/hooks/effectHooks/EffectHook'
import Example from './components/hooks/stateHooks/StateHook'

function App(): JSX.Element {
  return (
   <>
    <Example />
    <hr />
    <EffectCallback />
   </>
  )
}

export default App
