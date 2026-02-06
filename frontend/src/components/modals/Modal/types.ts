export type Props = {
  visible: boolean;
  setVisible: (value: boolean) => void;
  data: Item[];
  selectedItem: number;
};

type Item = {
  title: string;
  status: string;
  hiddenStatus: string;
};
