import React from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card";

import { AddressTooltip } from "@/components/AddressTooltip";
import { NftImage } from "@/components/NftImage";
import type { NFTItem } from "@/entities/NFTItem";
import { formatter } from "@/utils/formatter";

interface NFTItemCardProps extends Omit<React.ComponentPropsWithoutRef<typeof Card>, "children"> {
  nftItem: NFTItem;
}

export const NFTItemCard = React.forwardRef<HTMLDivElement, NFTItemCardProps>(({ nftItem, ...props }, ref) => (
  <Card {...props} ref={ref}>
    <CardHeader className="p-4">
      <CardTitle className="truncate">{nftItem.name}</CardTitle>
      <CardDescription className="flex flex-col items-baseline gap-2">
        <AddressTooltip trigger={`Owner: ${formatter.address(nftItem.ownerAddress)}`}>
          {nftItem.ownerAddress.toString()}
        </AddressTooltip>
        <div className="flex gap-2">
          <AddressTooltip trigger={formatter.address(nftItem.address)}>{nftItem.address.toString()}</AddressTooltip>|
          <AddressTooltip trigger={`(${formatter.address(nftItem.address, { isRaw: true })})`}>
            {nftItem.address.toString(false)}
          </AddressTooltip>
        </div>
      </CardDescription>
    </CardHeader>
    <CardContent className="p-0">
      <NftImage src={nftItem.image} alt={nftItem.name} className="w-full h-auto aspect-square" />
    </CardContent>
    {nftItem.description ? <CardFooter className="p-4">{nftItem.description}</CardFooter> : null}
  </Card>
));
