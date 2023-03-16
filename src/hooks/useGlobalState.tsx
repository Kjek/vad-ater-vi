import type { Dispatch } from 'react';
import { createContext, useContext, useReducer } from 'react';
import { sweDays } from '~/types/lunch-menu';

export interface MultiSelectorState {
  isMultiSelect: boolean;
  daysSelected: Map<string, boolean>;
}

export type Action<T> =
  | { type: 'multi-select'; payload: T }
  | { type: 'single-select'; payload: T };

export interface MultiSelectorPayload {
  day?: string;
  isSelected?: boolean;
}
const initialState: MultiSelectorState = {
  isMultiSelect: false,
  daysSelected: new Map<string, boolean>(
    sweDays.map((day) => [day, false]) ?? []
  ),
};

const useMultiSelector = () => {
  const stateReducer = (
    state: MultiSelectorState,
    action: Action<MultiSelectorPayload>
  ): MultiSelectorState => {
    const { day, isSelected } = action.payload;
    switch (action.type) {
      case 'multi-select':
        day &&
          isSelected !== undefined &&
          state.daysSelected.set(day, isSelected);
        return {
          ...state,
          isMultiSelect: true,
        };
      case 'single-select':
        const initialDaysSelected = new Map(initialState.daysSelected);
        const newDaysSelected =
          day && isSelected !== undefined
            ? initialDaysSelected.set(day, isSelected)
            : initialState.daysSelected;
        return {
          ...initialState,
          isMultiSelect: false,
          daysSelected: newDaysSelected,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(stateReducer, initialState);

  return { state, dispatch };
};

type Props = {
  children: React.ReactNode;
};

interface StateContextValue {
  state: MultiSelectorState;
  dispatch: Dispatch<Action<MultiSelectorPayload>>;
}

const StateContext = createContext<StateContextValue>({
  state: initialState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
});

const StateProvider = ({ children }: Props) => {
  const { state, dispatch } = useMultiSelector();

  const contextValue: StateContextValue = {
    state,
    dispatch,
  };

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

const useGlobalState = () => useContext(StateContext);

export { StateProvider, useGlobalState };
