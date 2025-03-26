import { PaginatedSchedulerData, SchedulerProjectData } from "@/types/global";

export type GridProps = {
  zoom: number;
  rows: number;
  data: PaginatedSchedulerData;
  onTileClick?: (data: SchedulerProjectData) => void;
  dir: "ltr" | "rtl";
};

export type StyledSpanProps = {
  position: "left" | "right";
};
