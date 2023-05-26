document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("fileInput");
    const parseBtn = document.getElementById("parseBtn");
    
    parseBtn.addEventListener("click", function() {
        // Get the selected file
        const file = fileInput.files[0];
        // Make the API request with the selected file
        makeAPIRequest(file);
    });
});

function makeAPIRequest(file) {
    const mindeeClient = new mindee.Client({ apiKey: "fad5f13d840a9f9cf91e9e223c79702a" });
    
    const apiResponse = mindeeClient.docFromFile(file).parse(mindee.us.BankCheckV1);

    apiResponse.then((resp) => {
        if (resp.document === undefined) return;
        // Handle the API response here
        console.log(resp.document);
        console.log(resp.document.toString());
    });
}
