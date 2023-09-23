import { Heart } from "@/components/icons/Heart";
import { MapMarker } from "@/components/icons/MapMarker";
import { Share } from "@/components/icons/Share";

interface IFeedCardProps {
  id: number;
  userId: number;
  userNickname: string;
  address: string;
  latitude: number;
  longitude: number;
  photoUrl: string;
  likeCount: number;
  isLiked: boolean;
}

export const FeedCard = ({
  id,
  userId,
  userNickname,
  address,
  latitude,
  longitude,
  photoUrl,
  likeCount,
  isLiked,
}: IFeedCardProps) => {
  return (
    <div className="flex flex-col w-full bg-wt">
      <div className="px-[12px] py-[8px] flex gap-[8px] items-center">
        <img
          alt="프로필 사진"
          src={photoUrl}
          className="rounded-full w-[32px] h-[32px] object-cover"
        />
        <span className="tr02">{userNickname}</span>
      </div>
      <img
        alt="사진"
        src={photoUrl}
        className="w-full aspect-square  object-cover"
      />
      <div className="px-[16px] py-[12px] flex items-center w-full">
        <div className="flex gap-[2px] items-center mr-[12px]">
          <Heart type="stroke" />
          <span className="tr04 text-gy-600">{likeCount}</span>
        </div>
        <div className="flex gap-[2px] items-center">
          <MapMarker />
          <span className="tr04 text-gy-600">{address}</span>
        </div>
        <div className="ml-auto">
          <Share />
        </div>
      </div>
    </div>
  );
};
