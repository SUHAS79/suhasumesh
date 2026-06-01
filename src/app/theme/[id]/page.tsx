import { ThemeWrapper } from "@/components/common/ThemeWrapper";
import { PortfolioPage } from "@/components/PortfolioPage";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ThemePreviewPage({ params }: Props) {
  const { id } = await params;
  return (
    <ThemeWrapper themeId={id}>
      <PortfolioPage />
    </ThemeWrapper>
  );
}

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
  ];
}
