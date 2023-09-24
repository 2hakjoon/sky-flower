"use client";

import GoogleMapComponent from "@/components/ui/google-map/GoogleMapComponent";
import { useWritePosts } from "@/hooks/posts/useWritePosts";

export default function FlowerGarden() {
  const { data: posts } = useWritePosts();
  const markers =
    posts?.data?.list?.map((post: any) => {
      return {
        latitude: post.latitude,
        longitude: post.longitude,
        image: post.markerPhotoUrl,
      };
    }) || [];

  return (
    <div className="w-full h-[80vh] ">
      <GoogleMapComponent
        markers={markers}
        onChangeCenter={() => {}}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
