import { TableComponent } from "../../../../components/common/table";
import { MainLayout } from "../../../../components/layout";
import { FC } from "react";

export interface CockpitProps {}

export const CockpitPage: FC<CockpitProps> = (props: CockpitProps) => {
  return (
    <MainLayout>
      <h1>Cockpit view</h1>
      <TableComponent />
    </MainLayout>
  );
};
