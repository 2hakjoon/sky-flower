import { SkyFlowerEmpty } from "@/components/ui/empty/SkyFlower";
import { FeedCard } from "@/components/ui/feed-card/FeedCard";

export const FeedList = () => {
  return (
    <div className="flex flex-col items-center bg-gy-40 gap-[12px]">
      <FeedCard />
      <FeedCard />
      <SkyFlowerEmpty />
    </div>
  );
};
