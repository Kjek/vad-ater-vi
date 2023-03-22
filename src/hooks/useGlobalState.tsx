import { sweDays } from '@type/swedish-days';
import type { Dispatch } from 'react';
import { createContext, useContext, useReducer } from 'react';

export interface MultiSelectorState {
  isMultiSelect: boolean;
  daysSelected: Map<string, boolean>;
}

export type Action<T> =
  | { type: 'all' }
  | { type: 'selected'; payload: T }
  | { type: 'reset' };

export interface MultiSelectorPayload {
  day: string;
}
const initialState: MultiSelectorState = {
  isMultiSelect: false,
  daysSelected: new Map<string, boolean>(sweDays.map((day) => [day, false])),
};

const useMultiSelector = () => {
  const stateReducer = (
    state: MultiSelectorState,
    action: Action<MultiSelectorPayload>
  ): MultiSelectorState => {
    switch (action.type) {
      case 'all':
        sweDays.map((day) => state.daysSelected.set(day, true));
        return {
          ...state,
          isMultiSelect: true,
        };
      case 'selected':
        const { day } = action.payload;
        const initialDaysSelected = new Map(initialState.daysSelected);
        initialDaysSelected.set(day, true);
        return {
          ...initialState,
          isMultiSelect: false,
          daysSelected: initialDaysSelected,
        };
      case 'reset':
        const resettedDays = new Map(initialState.daysSelected);
        resettedDays.set(sweDays[new Date().getDay() - 1] ?? sweDays[0], true);
        return {
          ...initialState,
          isMultiSelect: false,
          daysSelected: resettedDays,
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
