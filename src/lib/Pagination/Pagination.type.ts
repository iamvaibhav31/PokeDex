import { ReactElement, ReactNode } from "react";

export interface PaginationProps {
  children?: ReactNode;
  data: any[];
  pageno: number;
}
