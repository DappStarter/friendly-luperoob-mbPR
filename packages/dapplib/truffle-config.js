require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember modify idea clog orange text'; 
let testAccounts = [
"0xe1668deb6aad2b2c8b69227666515576cf61df8fb63df4ffdfce6157bd5b299b",
"0xedd1c3facc0d013df5303da4b2de0b56e4ccfad23a333199e4679bd2d2e61e97",
"0x5804c56263c952b223af3601c559417856ff766d86b5f5fef54dad83eae4cd4d",
"0xb78c151af97d25ffafeea2b6c67044634bd2a29e6ec755c43dbe1ff1f354c129",
"0x11beb6a3c01ac5fa69779a20fff59406379b01eb124bfb4de46b39c7d483c293",
"0xf1ec2deba946d9f27642c1f3a3e5900e77b8f17c44256029f1ef41219998a1ae",
"0xaa35c23ec4548adc21343005aa2d088cca016710fe58bab739066bc582d514b4",
"0x493669919ecd29b9f07f367f43db089ff53e998891826cfe1b305f28f00fbe1d",
"0x676b36e11f285f4ba402f63e45e88d110a5b10aa7c7a1e7c63c79580cd052cd6",
"0xee8223df94bfc55cec984f0e369d7da87af9fa886b1011837eedcf4998918cd1"
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

