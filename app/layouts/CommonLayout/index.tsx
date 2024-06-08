import { ReactNode } from "react";
import { ContentLayout, WrapperLayout } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: LayoutProps) {
  return (
    <WrapperLayout>
      <ContentLayout>{children}</ContentLayout>
    </WrapperLayout>
  );
}
