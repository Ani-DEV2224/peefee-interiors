"use client";

import UpholsteryImageCard from "./UpholsteryImageCard";
import UpholsteryVideoCard from "./UpholsteryVideoCard";

export default function UpholsteryGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Row 1 */}
      <UpholsteryImageCard
        src="/images/Upholstery_service-1.jpg"
      />

      <UpholsteryVideoCard
        src="/videos/Upholstery_service_video-1.mp4"
      />

      <UpholsteryImageCard
        src="/images/Upholstery_service-2.jpg"
      />

      {/* Row 2 */}
      <UpholsteryVideoCard
        src="/videos/Upholstery_service_video-2.mp4"
      />

      <UpholsteryImageCard
        src="/images/Upholstery_service-3.jpg"
      />

      <UpholsteryVideoCard
        src="/videos/Upholstery_service_video-3.mp4"
      />

      {/* Row 3 */}
      <UpholsteryImageCard
        src="/images/Upholstery_service-4.jpg"
      />

      <UpholsteryVideoCard
        src="/videos/Upholstery_service_video-4.mp4"
      />

      <UpholsteryImageCard
        src="/images/Upholstery_service-5.jpg"
      />

      {/* Row 4 */}
      <UpholsteryVideoCard
        src="/videos/Upholstery_service_video-5.mp4"
      />

      <UpholsteryImageCard
        src="/images/Upholstery_service-6.jpg"
      />

      <UpholsteryImageCard
        src="/images/Upholstery_service-7.jpg"
      />

    </div>
  );
}