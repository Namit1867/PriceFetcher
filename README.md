# Price Fetcher

This is a simple contract which uses [PancakeSwap] to fetch token price if a pair aaray is not present for the token.

The `contracts/PriceFetcher.sol` contains the code to fetch the price of token no matter given token is a [Normal] token or an [LiquidityPool] pair.

## How to Get Started To use the PriceFetcher:-

1. The most important thing is you prior have a clear understanding of what reserves are in [Pair] Contracts.

2. The second important thing is there is test file `test/test.js` which you can use to interact with PriceFetcher.

3. If you don't want to use pancakeswap you can set your own pair array for that specific token .
   for e.g -> To fetch the price of [BSW](Biswap Native Token) you can set path as 
   1.[BSW-BNB,BNB-(AnyStableToken)]
   2.[BSW-BNB,BNB-BTCB,BTCB-(AnyStableToken)]
   ....
   and lot more
   Note Pair Array last pair should include a stable coin.

## Calling PriceFetcher Functions:-

1.`fetchTokenPrice(address token)` use this function to get the token price which is scaled to18 decimals.

2.`fetchTokenSymbol(address token)` use this function to get the token symbol if it is lp it will include both tokens in that lp and that lp symbol.

3.`setPricePath(address token,address[] memory path)` only owner can set a path array for a token.

## Using test.js:-

1. Start a local node which forks the binance mainnet using this script. 
   `npx hardhat node --fork https://speedy-nodes-nyc.moralis.io/f19381e84e5c8dde5935ae3e/bsc/mainnet/archive`

2. Run the test using this script.
   `npx hardhat test`

## test.js output will be like this:-

```
AQUA =>  $512.143943349349348327
-------------------------------------------------------------------------------
WBNB =>  $415.434643748520564067
-------------------------------------------------------------------------------
AQUA-WBNB(Net-LP) =>  $955.265922331295263211
-------------------------------------------------------------------------------
BTCB =>  $40467.676013107073888697
-------------------------------------------------------------------------------
ADA =>  $0.955634593228078519
-------------------------------------------------------------------------------
ALPACA =>  $0.653668087454731039
-------------------------------------------------------------------------------
AAVE =>  $174.808557938787619001
-------------------------------------------------------------------------------
ALPHA =>  $0.375955518997254597
-------------------------------------------------------------------------------
ATOM =>  $24.115920292566353109
-------------------------------------------------------------------------------
AUTO =>  $417.916140386666619005
-------------------------------------------------------------------------------
AVAX =>  $77.333730295795976347
-------------------------------------------------------------------------------
AXS =>  $48.052852168051618627
-------------------------------------------------------------------------------
BAND =>  $3.755236304804650183
-------------------------------------------------------------------------------
BIFI =>  $1487.748825356647787983
-------------------------------------------------------------------------------
Cake =>  $8.084372942556240502
-------------------------------------------------------------------------------
COMP =>  $154.242301801843688622
-------------------------------------------------------------------------------
CREAM =>  $43.503489943834798234
-------------------------------------------------------------------------------
DOGE =>  $0.145874246365600388
-------------------------------------------------------------------------------
ROBODOGE =>  $0.000000000009085555
-------------------------------------------------------------------------------
DODO =>  $0.413572134367712591
-------------------------------------------------------------------------------
DOT =>  $18.34130541304513788
-------------------------------------------------------------------------------
LINK =>  $14.056670845579734208
-------------------------------------------------------------------------------
MATIC =>  $1.388277414238190827
-------------------------------------------------------------------------------
XRP =>  $0.784421339892988016
-------------------------------------------------------------------------------
BUSD =>  $0.999999999999999624
-------------------------------------------------------------------------------
UST =>  $1.00396811637011664
-------------------------------------------------------------------------------
USDC =>  $0.999386753514085496
-------------------------------------------------------------------------------
USDT =>  $0.999205549551197451
-------------------------------------------------------------------------------
DAI =>  $0.999996586555838789
-------------------------------------------------------------------------------
FRAX =>  $1.091648105722080605
-------------------------------------------------------------------------------
SHIB =>  $0.000025826140569675
```

## Get Help and Join the Community

If you need help or would like to discuss PriceFetcher then send me a message [on linkedin](https://www.linkedin.com/in/namit-jain-355367186/), or [email me](namit.cs.rdjps@gmail.com).

## Author

This Contract was written by Namit Jain.

Contact:

- https://www.linkedin.com/in/namit-jain-355367186/
- namit.cs.rdjps@gmail.com

## License
Anyone can use or modify this software for their purposes.
