export interface GridData {
  [row: number]: {
    [col: number]: {
      selection: boolean;
    };
  };
}
