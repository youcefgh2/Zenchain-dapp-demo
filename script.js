function loadWallet() {
  const wallet = document.getElementById('wallet').value;
  const output = document.getElementById('output');

  if (!wallet) {
    output.innerHTML = 'Please enter a wallet address.';
    return;
  }

  // Mock data display
  output.innerHTML = `
    <h3>Wallet: ${wallet}</h3>
    <p>Balance: 123.45 ZEN</p>
    <p>Transactions: 10</p>
  `;
}
