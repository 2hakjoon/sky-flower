import { FeedCard } from "@/components/ui/feed-card/FeedCard";

export const FeedList = () => {
  return (
    <div className="flex flex-col items-center bg-gy-40 gap-[12px]">
      <FeedCard />
      <FeedCard />
      <div className="pt-[12px] pb-[24px] ">
        <span className="tb01 text-gy-160">{"SKYFLOWER"}</span>
      </div>
    </div>
  );
};
