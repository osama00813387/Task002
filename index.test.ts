import { getLastBlockNumber, getUSDTBalance } from './index';

describe('Ethereum Info', () => {
    it('should get the last block number of the Ethereum mainnet', async () => {
        const blockNumber = await getLastBlockNumber();
        expect(typeof blockNumber).toBe('number');
        expect(blockNumber).toBeGreaterThan(0);
    });

    it('should get the USDT balance of a provided address', async () => {
        const address = 'https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7'; // Insert an Ethereum address here
        const balance = await getUSDTBalance(address);
        expect(typeof balance).toBe('string');
        expect(parseFloat(balance)).toBeGreaterThanOrEqual(0);
    });

 
});
