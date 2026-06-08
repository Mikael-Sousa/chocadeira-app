import type { IconName } from "@/src/types/icons";

export type Props = {
  data: Item[];
  showModal?: boolean;
  showMenu?: boolean;
  showSlides?: boolean;
  title?: string;
  typeMenu?: string[];
  situations?: string[];
};

export type Item = {
  icon?: IconName;
  title: string;
  status?: string;
  hiddenStatus?: string;
  connection?: boolean;
};
