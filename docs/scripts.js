async function submitData() {
    const scriptURL = 'YOUR_DEPLOYED_WEB_APP_URL'; // You get this after deploying
    
    const payload = {
  name: document.getElementById('bName').value,
  business:document.getElementById('bBusiness').value,
  email:document.getElementById('bEmail').value,
  phone:document.getElementById('bPhone').value,
  city:document.getElementById('bCity').value,
  type:document.getElementById('bType').value,
  themeId:document.getElementById('bTheme').value,
  budget:document.getElementById('bBudget').value,
  message:document.getElementById('bMessage').value,
    };

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            mode: 'no-cors' // Use 'no-cors' if you face cross-origin issues
        });
        alert("Data sent successfully!");
    } catch (error) {
        console.error('Error!', error.message);
    }
}
