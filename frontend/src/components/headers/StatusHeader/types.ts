export type Props = {
  title?: string;
  indexSelected: number;
  setIndexSelected: React.Dispatch<React.SetStateAction<number>>;
  data: number[][];
};