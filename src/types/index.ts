import { HexString } from "@polkadot/util/types";

type Token = {
    id: string;
    ownerId: HexString;
    name: string;
    description: string;
    media: string;
    reference: string;
    approvedAccountIds: HexString[];
  };

  export type { Token };