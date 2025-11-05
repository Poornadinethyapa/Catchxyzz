import { ethers } from 'ethers';
import { getContract, submitScore, getTopPlayers, type ScoreEntry } from './contract';

/**
 * Get Web3 provider from window.ethereum or window.okxwallet
 */
export function getProvider(): ethers.BrowserProvider | null {
  if (typeof window === 'undefined') return null;
  
  if (window.ethereum) {
    return new ethers.BrowserProvider(window.ethereum);
  } else if (window.okxwallet) {
    return new ethers.BrowserProvider(window.okxwallet);
  }
  
  return null;
}

/**
 * Get signer from provider
 */
export async function getSigner(provider: ethers.BrowserProvider): Promise<ethers.JsonRpcSigner> {
  return await provider.getSigner();
}

/**
 * Submit score to smart contract
 */
export async function submitScoreToContract(score: number): Promise<string> {
  const provider = getProvider();
  if (!provider) {
    throw new Error('No Web3 provider found. Please connect a wallet.');
  }

  const signer = await getSigner(provider);
  const tx = await submitScore(provider, signer, score);
  
  // Wait for transaction to be mined
  await tx.wait();
  
  return tx.hash;
}

/**
 * Load leaderboard from smart contract
 */
export async function loadLeaderboardFromContract(count: number = 10): Promise<ScoreEntry[]> {
  const provider = getProvider();
  if (!provider) {
    // If no provider, return empty array or fallback to localStorage
    return [];
  }

  try {
    const entries = await getTopPlayers(provider, count);
    return entries.map(entry => ({
      player: entry.player,
      score: Number(entry.score),
      timestamp: Number(entry.timestamp),
    }));
  } catch (error) {
    console.error('Error loading leaderboard from contract:', error);
    return [];
  }
}

/**
 * Convert address to short format
 */
export function formatAddress(address: string): string {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

