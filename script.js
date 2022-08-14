const form = document.querySelector('form');
const input =document.querySelector('.input');

const replaceImages = (url) =>{
    const images =document.querySelector('img');
    images.forEach((image) => image.src =url);
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeSprict({
        target: {tabId: tab.id },
        function: replaceImages,
        args: [input.value]
    });
});