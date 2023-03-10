import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xe367Ebb24c552fC229471E2C104bcb9F4C85E313"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/UxM1G7X3ulOMGWACfKpY9n0JFzBZYMAp",
  },
};