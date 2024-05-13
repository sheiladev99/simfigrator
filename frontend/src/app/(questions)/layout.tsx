import Header from "@/components/layout/header";
import CustomButton from "@/components/shared/custom-button";
import QuestionPageMain from "@/components/layout/main/question-page-main";
import { Icons } from "@/components/shared/icons";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header>
        <CustomButton variant="secondary">
          <Icons.Close />
        </CustomButton>
      </Header>
      <QuestionPageMain>{children}</QuestionPageMain>
    </>
  );
}

export default Layout;
