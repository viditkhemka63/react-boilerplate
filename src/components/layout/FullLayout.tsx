import { FC, ReactNode } from "react";

interface FullLayoutProps {
  children: ReactNode;
}

export const FullLayout: FC<FullLayoutProps> = ({
  children,
}: FullLayoutProps) => {
  return <>{children}</>;
};
