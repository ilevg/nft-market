"use client"
import { useFetchData } from "@/hooks/useFetchData"
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react"

interface CollectionsContextProps {
  collectionsArr: any[]
  setCollectionsArr: React.Dispatch<React.SetStateAction<any[]>>
}

const CollectionsContext = createContext<CollectionsContextProps | undefined>(undefined);

export const CollectionsProvider = ({ children }: { children: ReactNode }) => {
  const [collectionsArr, setCollectionsArr] = useState<any[]>([])
  const { nfts } = useFetchData({ endpoint: "/api/nfts" })

  useEffect(() => {
    if (nfts.length > 0) {
      const collectionsReduce = nfts.reduce((acc: any, nft) => {
        acc[nft.collection] = acc[nft.collection] || []
        acc[nft.collection].push(nft)
        return acc
      }, {})

      const arr = Object.entries(collectionsReduce);
      setCollectionsArr(arr);
    }
  }, [nfts])

  return (
    <CollectionsContext.Provider value={{ collectionsArr, setCollectionsArr }}>
      {children}
    </CollectionsContext.Provider>
  );
};

export const useCollections = () => {
  const context = useContext(CollectionsContext);
  if (context === undefined) {
    throw new Error("useCollections must be used within a CollectionsProvider")
  }
  return context
};
