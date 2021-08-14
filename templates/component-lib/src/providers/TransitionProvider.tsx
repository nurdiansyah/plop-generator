import React, { createContext, useReducer } from "react"

interface TransitionContextState {
  count: number
}

export enum TransitionContextActionType {
  START = 'START',
  END = 'END'
}

export type TransitionContextAction = { type: TransitionContextActionType }

interface TransitionContext {
  state: TransitionContextState,
  dispatch: (action: TransitionContextAction) => void
}

const initialState: TransitionContext = {
  state: {
    count: 0
  },
  dispatch: (_action: TransitionContextAction) => { return }
}

export const TransitionContext = createContext<TransitionContext>(initialState)

const { Provider } = TransitionContext

const reducer = (state: TransitionContextState, action: TransitionContextAction): TransitionContextState => {
  switch (action.type) {
    case TransitionContextActionType.START: return { ...state, count: state.count + 1 }
    case TransitionContextActionType.END: return { ...state, count: state.count - 1 }
  }
}

export const TransitionProvider = (props: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  const value = { state, dispatch }

  return (
    <Provider value={value}>
      {props.children}
    </Provider>
  )
}
