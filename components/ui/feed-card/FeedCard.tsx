import { Heart } from "@/components/icons/Heart";
import { MapMarker } from "@/components/icons/MapMarker";
import { Share } from "@/components/icons/Share";

interface IFeedCardProps {}

export const FeedCard = () => {
  return (
    <div className="flex flex-col w-full bg-wt">
      <div className="px-[12px] py-[8px] flex gap-[8px] items-center">
        <img
          alt="프로필 사진"
          src={
            "https://us.123rf.com/450wm/jpkirakun/jpkirakun1606/jpkirakun160600420/59177453-%ED%95%98%EB%8A%98-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%A6%84-%EB%8B%A4%EC%9A%B4-%ED%91%B8%EB%A5%B8-%ED%95%98%EB%8A%98%EA%B3%BC-%ED%9D%B0-%EA%B5%AC%EB%A6%84%EC%9E%85%EB%8B%88%EB%8B%A4.jpg"
          }
          className="rounded-full w-[32px] h-[32px] object-cover"
        />
        <span className="tr02">{"사용자이름은열글자아"}</span>
      </div>
      <img
        alt="사진"
        src={
          "https://us.123rf.com/450wm/jpkirakun/jpkirakun1606/jpkirakun160600420/59177453-%ED%95%98%EB%8A%98-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%A6%84-%EB%8B%A4%EC%9A%B4-%ED%91%B8%EB%A5%B8-%ED%95%98%EB%8A%98%EA%B3%BC-%ED%9D%B0-%EA%B5%AC%EB%A6%84%EC%9E%85%EB%8B%88%EB%8B%A4.jpg"
        }
        className="w-full aspect-square  object-cover"
      />
      <div className="px-[16px] py-[12px] flex items-center w-full">
        <div className="flex gap-[2px] items-center mr-[12px]">
          <Heart type="stroke" />
          <span className="tr04 text-gy-600">{"1k"}</span>
        </div>
        <div className="flex gap-[2px] items-center">
          <MapMarker />
          <span className="tr04 text-gy-600">{"하늘도 맑군"}</span>
        </div>
        <div className="ml-auto">
          <Share />
        </div>
      </div>
    </div>
  );
};
