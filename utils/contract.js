import { ethers } from "ethers";
import CustomDEXABI from "../utils/CustomDEX.json";
import CustomTokenABI from "../utils/CustomToken.json";

export const tokenContract = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();

    const contractReader = new ethereum.Contract(
      address,
      CustomTokenABI.abi,
      signer
    );

    return contractReader;
  }
};

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();

    const contractReader = new ethereum.Contract(
      "0x1776893d9973262154d0b18C27ceeeFc6865bA47",
      CustomDEXABI.abi,
      signer
    );

    return contractReader;
  }
};
