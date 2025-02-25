import React, { useState, useEffect, useRef } from "react";
import {
  getTokenAddress,
  getTokenBalance,
  increraseAllowance,
} from "../utils/context";
import { ethers } from "ethers";
import toast, { Toaster } from "react-hot-toast";
import {
  ClipboardIcon,
  ClipboardCheckIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import TransactionStatus from "./TransactionStatus";

const SingleCard = ({ index, name, walletAddress }) => {
  const [balance, setBalance] = useState("-");
  const [tokenAddress, setTokenAddress] = useState();
  const [copyIcon, setCopyIcon] = useState({ icon: ClipboardIcon });

  const [txPending, setTxPending] = useState(false);

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifySuccess = () => toast.success("Transaction Completed.");

  useEffect(() => {
    if (name && walletAddress) {
      fetchTokenBalance();
      fetchTokenAddress();
    } else setBalance("-");
  }, [name, walletAddress]);

  async function fetchTokenBalance() {
    const bal = await getTokenBalance(name, walletAddress);

    const fBal = ethers.utils.formatUnits(bal.toString(), 18);
    setBalance(fBal.toString());
  }
  async function fetchTokenAddress() {
    const address = await getTokenAddress(name);
    setTokenAddress(address);
  }

  return (
    <article className="flex flex-col bg-[@212429]">
      <a
        rel="noopener noreferrer"
        href="#"
        aria-aria-label="Est labore do officia deserunt"
      >
        <img
          alt=""
          className="obect-cover w-full h-62 bg-gray-500"
          src={`img/${index}.png`}
        />
      </a>

      <div className="flex flex-col flex-1 p-6">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-aria-label="Est labore do officia deserunt"
        ></a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="text-xs tracki uppercase hover:underline text-[#7765F3]"
        >
          {name} 10 M Supply
        </a>

        <h3 className="flex-1 py-2 text-lg font-semibold leadi">
          Set {name} token, limited Supply available
        </h3>

        <div className="flex mx-2 pt-[10px]">
          <div
            className="flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 
          rounded-l-lg"
          >
            <p className="text-sm">{name}</p>
            <p className="bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100">
              {balance}
            </p>
          </div>

          <div className="flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg">
            <copyIcon.icon
              className="h-6 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(tokenAddress);
                setCopyIcon({ icon: ClipboardCheckIcon });
              }}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleCard;
