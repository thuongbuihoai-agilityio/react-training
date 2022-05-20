import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./components/hooks/contextHooks/Context"
import { ClearUp, PreviewAvatar, Timer, UseLayoutEffect } from "./components/hooks/effectHooks/EffectHook"
import FileInput from "./components/hooks/fileInput/FileInput"
import { ExampleUseMemo } from "./components/hooks/memoHooks/Memo"
import NameForm from "./components/hooks/nameForm/NameForm"
import Pagination from "./components/hooks/pagination/Pagination"
import { RefHook } from "./components/hooks/refHooks/refHooks"
import Example, { Reducer } from "./components/hooks/stateHooks/StateHook"
import Profile from "./components/hooks/swr/FetchingData"
import TodoAppSWR from "./Example-SWR/TodoApp"
import { Gift } from "./gift/Gift"
import Counter from "./test/act/Counter"
import Toggle from "./test/event/Event"
import { TodoApp } from "./todoApp/TodoApp"
import { TodoList } from "./todoList/Todo"

function App(): JSX.Element {
  return (
   <>
    <TodoAppSWR />
    {/* <Example />
    <hr />
    <Timer />
    <hr />
    <ClearUp />
    <hr />
    <PreviewAvatar />
    <hr />
    <ThemeProvider />
    <hr />
    <RefHook />
    <hr />
    <UseLayoutEffect />
    <hr />
    <Reducer />
    <hr />
    <ExampleUseMemo />
    <hr />
    <TodoList />
    <hr />
    <TodoApp />
    <hr />
    <Gift />
    <hr />
    <NameForm />
    <hr />
    <FileInput />
    <hr />
    <Profile />
    <hr />
    <Pagination /> */}
    {/* <Counter /> */}
    {/* <Toggle onChange={function (arg0: boolean): void {
        throw new Error("Function not implemented.")
      } } /> */}
   </>
  )
}

export default App
