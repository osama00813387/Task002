import { ethers } from 'ethers';

// Function to get the last block number of the Ethereum mainnet
async function getLastBlockNumber(): Promise<number> {
    const provider = ethers.getDefaultProvider();
    const blockNumber = await provider.getBlockNumber();
    return blockNumber;
}

// Function to get the USDT balance of a provided address
async function getUSDTBalance(address: string): Promise<string> {
    const tokenAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'; // USDT contract address
    const provider = ethers.getDefaultProvider();
    const contract = new ethers.Contract(tokenAddress, ['function balanceOf(address)'], provider);
    const balance = await contract.balanceOf(address);
    return ethers.utils.formatUnits(balance, 6); // USDT has 6 decimal places
}

export { getLastBlockNumber, getUSDTBalance };