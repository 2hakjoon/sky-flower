import { SkyFlowerEmpty } from "@/components/ui/empty/SkyFlower";
import { FeedCard } from "@/components/ui/feed-card/FeedCard";
import { useWritePosts } from "@/hooks/posts/useWritePosts";

export const FeedList = () => {
  const { data: posts } = useWritePosts();

  return (
    <div className="flex flex-col items-center bg-gy-40 gap-[12px]">
      {posts?.data?.list?.map((post: any) => {
        return <FeedCard key={post.id} {...post} />;
      })}
      <SkyFlowerEmpty />
    </div>
  );
};
