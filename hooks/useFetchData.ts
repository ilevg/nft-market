import { useEffect, useState } from "react";

interface UseFetchDataProps {
  endpoint: string;
}

interface Author {
  id: number;
  bio: string;
  name: string;
  icon: string;
  change_all: number;
  change_month: number;
  change_week: number;
  change_day: number;
  nft_sold_all: number;
  nft_sold_month: number;
  nft_sold_week: number;
  nft_sold_day: number;
  volume_all: number;
  volume_month: number;
  volume_week: number;
  volume_day: number;
  date: string;
}
interface Product {
  id: number;
  name: string;
  author: string;
  price: number;
  bid: number;
  create_date: string;
  description: string;
  collection: string;
  collection_info: string;
  auction_end: string;
  main_img: string;
  logo: string;
  author_icon: string;
  date: string;
}

export const useFetchData = ({ endpoint }: UseFetchDataProps) => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [nfts, setNfts] = useState<Product[]>([]);
  const [singleNfts, setSingleNfts] = useState<Product>();
  const [singleAuthor, setSingleAuthor] = useState<Author>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const result = await response.json();
        endpoint === "/api/authors" && setAuthors(result as Author[]);
        endpoint === "/api/nfts" && setNfts(result as Product[]);
        endpoint.match("/api/nfts/") && setSingleNfts(result as Product);
        endpoint.match("/api/authors/") && setSingleAuthor(result as Author);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [endpoint]);

  return { authors, nfts, singleNfts, singleAuthor };
};
