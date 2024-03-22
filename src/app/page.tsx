import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 flex flex-col text-center mx-auto items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Shaddy Marketplace for high quality {' '} 
          <span className="text-blue-700">digital assets</span>
        </h1>
      </div>
    </MaxWidthWrapper>
  );
}
