import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants, Button } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant delivery",
    Icon: ArrowDownToLine,
    description: "Get access to your digital assets instantly after purchase."
  },
  {
    name: "Guaranteed quality",
    Icon: CheckCircle,
    description: "Every digital asset is handpicked and reviewed by our team. Not satisfied? Get a refund."
  },
  {
    name: "For the planet",
    Icon: Leaf,
    description: "We plant a tree for every purchase made on our platform."
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 flex flex-col text-center mx-auto items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Shaddy Marketplace for high quality {' '} 
            <span className="text-blue-700">digital assets</span>
          </h1>
          <p className="mt-5 text-lg max-w-prose text-muted-foreground">
            Get access to high quality digital assets for your projects. 
            We have a wide range of digital assets to choose from.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild>
              <Link href="/products">Browse trending</Link>
            </Button>
            <Button variant="outline">Our quality promise &rarr;</Button>
          </div>
        </div>

        {/* TODO: add products */}

      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:gap-x-6 lg:gap-x-8 lg:gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk) => (
              <div 
                key={perk.name} 
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                  <div className="md:flex-shrink-0 flex justify-center flex-wrap">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-900">
                      {perk.Icon && <perk.Icon className="w-1/3 h-1/3" />}
                    </div>

                    <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg-mt-6">
                      <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground overflow-hidden text-ellipsis">{perk.description}</p>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );


}
