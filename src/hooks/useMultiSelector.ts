import { useReducer } from 'react';
import { sweDays } from '~/types/lunch-menu';

interface MultiSelectorState {
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

const useMultiSelector = () => {
  const initialState: MultiSelectorState = {
    isMultiSelect: false,
    daysSelected: new Map<string, boolean>(
      sweDays.map((day) => [day, false]) ?? []
    ),
  };

  const stateReducer = (
    state: MultiSelectorState,
    action: Action<MultiSelectorPayload>
  ): MultiSelectorState => {
    const payload = action.payload;
    switch (action.type) {
      case 'multi-select':
        payload.day &&
          payload.isSelected &&
          state.daysSelected.set(payload.day, payload.isSelected);
        console.log('multi-select', state);
        return {
          ...state,
          isMultiSelect: true,
        };
      case 'single-select':
        const tempDaysSelected =
          payload.day && payload.isSelected
            ? initialState.daysSelected.set(payload.day, payload.isSelected)
            : initialState.daysSelected;
        console.log('single-select', state);
        return {
          ...initialState,
          isMultiSelect: false,
          daysSelected: tempDaysSelected,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(stateReducer, initialState);

  return { state, dispatch };
};

export default useMultiSelector;
