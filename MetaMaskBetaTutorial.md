## MetaMask QRsigner Beta Extension Tutorial

### Important Note:
This tutorial explains how to use the beta version of MetaMask with the beta version of Keystone.This version has been updated to **Support Eip1559 and sidechains**. If you have any questions or suggestions, please [contact us](https://keystonewallet.atlassian.net/servicedesk/customer/portal/1).


----

### I. Preparation: 

Install the MetaMask QRsigner Beta Extension and upgrade your Keystone Firmware.


#### Keystone Firmware Upgrade

1. Firmware version M-4.3 (Beta) running on Keystone Essential or Pro. 

   *  Firmware Download：[M-4.3](https://github.com/KeystoneHQ/metamask-extension/releases/download/V10.1.1/M-4.3.zip)
   * checksum：4a63a47d886d00129e9dc3cf552bc5bdaba746294f3235b14bb06b7e37bef4d8
  
    (Please read [How to upgrade](https://support.keyst.one/getting-started/firmware-upgrading) firmware for more details.)
#### MetaMask QRsigner Beta Extension installed on Chrome

> PC/Mac/Linux running with Chrome: Version 87.0.4280.141 (Official Build) (x86_64) or newer

1. Download the MetaMask QRsigner Beta Extension V10.1.1 package  to your computer, locate the downloaded ZIP file and unzip it.

     * MetaMask QRsigner Beta Extension Download: [MetaMask-Chrome-10.1.1](https://github.com/KeystoneHQ/metamask-extension/releases/download/V10.1.1/metamask-chrome-10.1.1.zip)

2. Go to **chrome://extensions/** and check the box for **Developer mode** in the top right.
![image](https://user-images.githubusercontent.com/37337093/137884326-96966585-6bbd-4d68-a26a-77ddd04ef513.png)
   
3. Click on the **Load unpacked extension** button and select the unzipped folder to install it into your extension.
![image](https://user-images.githubusercontent.com/37337093/137884612-36c797c4-5c3f-4024-8d10-19bf7fc06eff.png)


### II. Bind MetaMask QRsigner Beta Extension with your Keystone Hardware Wallet

1. On your Keystone: Select the [Menu] icon > [Watch-only Wallet] on the Keystone device.
![image](https://user-images.githubusercontent.com/37337093/137866622-ea80feee-bc8b-4d48-8f0c-b07caece8253.png)


2. Select [Web3]  and press [Confirm] -> [Display QR Code].
![image](https://user-images.githubusercontent.com/37337093/137866654-286a8c33-ef1c-4a20-8303-c842af1ee256.png)

3. PC/Mac/Linux: Disable all other instances of MetaMask on all open browsers.

4. Setup your MetaMask and enter the MetaMask Home Page.
![image](https://user-images.githubusercontent.com/37337093/137855559-176dd807-f198-488f-acc3-b102da4ff59e.png)

5. Click on [Connect Hardware Wallet].
![image](https://user-images.githubusercontent.com/37337093/137855581-68b72748-52bd-4b46-91c4-4f33c0781a4f.png)

6. Click on [QR-based HW Wallet]> [Continue].
![MM-绑定2](https://user-images.githubusercontent.com/37337093/137877291-5759941f-20ea-44d2-8874-b0344619c592.jpg)


7. Scan the QR code displayed on your Keystone hardware wallet.
![MM-扫码](https://user-images.githubusercontent.com/37337093/137877088-4650a393-ce5c-407b-9d7c-c358bd7eaffa.jpg)


8. Select an Account and click [Unlock]. MetaMask QRsigner Beta Extension should now be successfully bound to your Keystone.
![MM-选择地址](https://user-images.githubusercontent.com/37337093/137877698-f0cd1955-677c-4139-b74f-727bee1782d0.jpg)
![MM-地址list](https://user-images.githubusercontent.com/37337093/137877689-25cc160f-3b64-47c5-8d9c-54d5c233504f.jpg)

### III. Sending ETH(Mainnet) using MetaMask QRsigner Beta Extension

1. Generate an ETH transaction with your MetaMask wallet.
   
    a.  Click on [send], then enter the associated address in [send to address] ,and don’t forget to also set your desired [amount] and [Fee] to the limits you’re comfortable with.   
    ![MM-构建主网交易](https://user-images.githubusercontent.com/37337093/137878048-6e78f90b-333c-482c-b2ba-0e92fb0a40b7.jpg)
    ![MM-发送交易3](https://user-images.githubusercontent.com/37337093/137878061-d051fbad-e560-456a-a5b6-bf5faa0cbddf.jpg)



    b. You can adjust the transaction fee by selecting [edit] > [Advanced Option].
   * **Max priority fee** (aka “miner tip”) goes directly to miners and incentivizes them to prioritize your transaction. You’ll most often pay your max setting.
   * **Max fee** is the most you’ll pay (base fee + priority fee).
  
    ![image](https://user-images.githubusercontent.com/37337093/137879902-f1db2a0f-4600-436b-a0da-1fd6700e62a5.png)


    c. Click on [Next] and then [Confirm] after confirming the transaction details. Then, get the unsigned transaction in QR code format.
    ![image](https://user-images.githubusercontent.com/37337093/137856192-f6e3ea2e-2ec2-463b-bcfe-4b469898418a.png)
    ![image](https://user-images.githubusercontent.com/37337093/137856206-768cddda-5e2b-4e37-b694-6317929c2078.png)
    ![image](https://user-images.githubusercontent.com/37337093/137856221-3e8ce41c-a00a-4ca2-8844-7cf1401cd835.png)

2. Using your Keystone Hardware Wallet to Sign Transaction.

    a. In Web3 mode, touch the “scan” icon on the top right of your Keystone hardware wallet’s main page. Then, scan the QR code displayed on the MetaMask interface.
    ![image](https://user-images.githubusercontent.com/37337093/137866736-7223af56-a816-4b46-a1eb-ccdb8b9572b3.png)

    
    b. After confirming the transaction information, tap [Sign] and enter your password or fingerprint to sign the transaction to get the signed transaction information in QR code format.
    ![image](https://user-images.githubusercontent.com/37337093/137866755-d1aa7ea2-507f-4883-adf0-ec81dbd61a9e.png)


3. Broadcasting the transaction with your MetaMask.
a. On the MetaMask interface, click on [Scan] and scan the QR code displayed on your Keystone hardware wallet. Once the scan is complete, the transaction will be broadcasted directly onto the ETH blockchain.
![MM-交易回扫](https://user-images.githubusercontent.com/37337093/137878577-72fde968-dc05-4ad8-ae15-751cd7f2ee14.jpg)
![MM-交易广播](https://user-images.githubusercontent.com/37337093/137878592-eedf2bbd-9628-499a-8ff4-0d502e37a6ec.jpg)


### IV. Sending BSC(Smart Chain) using MetaMask QRsigner Beta Extension

1. Generate an BSC transaction with your MetaMask wallet.
   
    a.  Click on [send], then enter the associated address in [send to address] ,and also set your desired [amount] and [Fee] that you are most comfortable with.
    ![image](https://user-images.githubusercontent.com/37337093/137856292-5ffc9c5f-c8a8-47ef-a373-36f107775bfb.png)
    b.  Click on [Next] and [Confirm] after confirming the transaction details. Get the unsigned transaction in QR code format.
    ![image](https://user-images.githubusercontent.com/37337093/137856309-e4d65851-9b91-4284-b107-beca5964ac7e.png)
    ![image](https://user-images.githubusercontent.com/37337093/137856317-8668ff68-f662-441e-86fb-4da86e0be4f2.png)

2. Signing the transaction with your Keystone Hardware Wallet.
    a.  In Web3 mode, scan and sign transaction.
![image](https://user-images.githubusercontent.com/37337093/137866822-24ed6082-4ea9-4969-903e-62c17cc705d4.png)

3. Broadcasting the transaction with MetaMask.
![image](https://user-images.githubusercontent.com/37337093/137856339-7ed7de6b-37ad-4925-b198-f9175a55d243.png)
![image](https://user-images.githubusercontent.com/37337093/137856358-70eb6c88-ba30-4243-b4bd-40ae13e12537.png)
