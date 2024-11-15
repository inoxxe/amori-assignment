import {create} from 'zustand';

type AppData = {
  results: {
    score: number;
    description: string;
  };
  strength: {
    snippet: {
      header: string;
      messages: Array<{
        sender: string;
        content: string;
      }>;
      footer: string;
    };
  };
  'rizz-score': number;
};

interface UtilState {
  appData: AppData | null;
  setAppData: (newData: AppData) => void;
}

const initialState = {
  appData: null,
};

const useUtilStore = create<UtilState>(set => ({
  ...initialState,
  setAppData: newData => set({appData: newData}),
}));

export default useUtilStore;
