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
  return <div>SingleCard</div>;
};

export default SingleCard;
