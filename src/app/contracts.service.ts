import { Injectable } from '@angular/core';
import * as Web3 from 'web3';
import * as TruffleContract from 'truffle-contract';

declare let require: any;
declare let window: any;

const tokenAbi = require('../assets/contract.json');

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  private _account = '0xe6acf686f91b529f4c89f801e02081d4bb54f1fe';
  private _web3: any;

  private web3Provider = null;
  private _tokenContract: any;
  private _tokenContractAddress = '0x692a70d2e424a56d2c6c27aa97d1a86395877b3a';

  // constructor() {
  //   if (typeof window.web3 !== 'undefined') {
  //     // Use Mist/MetaMask's provider
  //     this._web3 = new Web3(window.web3.currentProvider);

  //     if (this._web3.version.network !== '4') {
  //       alert('Please connect to the Rinkeby network');
  //     }
  //   } else {
  //     console.warn(
  //       'Please use a dapp browser like mist or MetaMask plugin for chrome'
  //     );
  //   }

  //   this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
  // }

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      // this._web3 = new Web3.providers.HttpProvider('http://localhost:8545');
      this._web3 = new Web3(window.web3.currentProvider);
    }

    this._web3.eth.defaultAccount = this._account;
    this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
    console.log('connected: ', this._tokenContract);
  }
}
