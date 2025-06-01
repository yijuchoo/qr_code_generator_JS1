let apiURL = ""; // Shared variable to store QR code URL. empty by default.

document.getElementById("generate-btn").addEventListener("click", function () {
  let text = document.getElementById("text-input").value.trim();

  if (text) {
    let qrCodeContainer = document.getElementById("qr-code");

    apiURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      text
    )}`;

    // Clear previous QR Code
    qrCodeContainer.innerHTML = `<img id="qr-image" src="${apiURL}" alt="QR Code">`;

    // Show Download Button
    document.getElementById("download-btn").style.display = "flex";
  } else {
    alert("Please enter text or url to generate your QR Code");
  }
});

// Download QR Code
// Define the download click once outside the generate button logic
// Prevent multiple triggers to the download button every time the user clicks Generate.
document.getElementById("download-btn").addEventListener("click", function () {
  if (!apiURL) {
    alert("Please generate a QR Code first before downloading.");
    return;
  }

  let link = document.createElement("a");
  link.href = apiURL;
  link.download = "qr-code.png";
  link.target = "_blank";
  link.click();
});
