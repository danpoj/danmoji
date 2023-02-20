import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

type View = 'sm' | 'lg'
type TContext = {
  view: View
  setView: Dispatch<SetStateAction<View>>
}
export const ViewState = createContext<TContext | null>(null)

export default function ViewContext({ children }: { children: ReactNode }) {
  const [view, setView] = useState<View>('lg')

  return (
    <ViewState.Provider value={{ view, setView }}>
      {children}
    </ViewState.Provider>
  )
}
