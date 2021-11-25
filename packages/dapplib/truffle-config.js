require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture strike rival magic artwork hover arctic metal genre'; 
let testAccounts = [
"0x3351d24c9d48004b882085da0086a7e1ac76fe375c963510dd433c136e618104",
"0x517fd765a297b60c0afbfbad506d1a9d3c2cbcb7558e09a1ab175217f882355a",
"0x887382663fc596b1cf8dc689f198097193adcb9d6e2e15bf4adfb967989f97eb",
"0xe0ae388feeb552dfd85d3ee4ad5772f0f565835f472371311b2279549a9f39e3",
"0x23ec44c9e79f34ca22d563885753b214f147e075cfbeb0e7ddf888147d36cbfb",
"0xe5f87ebd2ececdf0f336dffb721b2f57c332eb0b00e95f02402471b7d62ad59a",
"0xdc4beb325c076310c88defffc2f26d654748d6020db597e6324609231a2455d1",
"0x7693352a1c841f96618fcc2b4930a4f044c5db3feaac8d9ac1259770cdf852dd",
"0xe3b7e3002a0092b3bf88a78a2005ce0542d3cb7fd8b97e0e0d8f1be05e671684",
"0xe274c70ff7f2cd33628f8aaba24e2e5ff67537a594b83d5483d05541a2059882"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

