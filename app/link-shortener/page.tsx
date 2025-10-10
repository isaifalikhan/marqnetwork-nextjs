export const metadata = {
  title: "Link Shortener Service | Create Short URLs | MarQ Networks",
  description: "Professional Link Shortener service by MarQ Networks. Create short, memorable URLs for your marketing campaigns, social media, and more. Track clicks and manage your links efficiently.",
  alternates: {
    canonical: "/link-shortener",
  },
};

import dynamic from "next/dynamic";
const LinkShortenerContent = dynamic(() => import('./LinkShortenerContent'));

export default function LinkShortenerPage() {
  return <LinkShortenerContent />;
}