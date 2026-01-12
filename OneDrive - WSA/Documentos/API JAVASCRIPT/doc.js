const myHeaders = new Headers();
myHeaders.append("Authorization", "App 748db47a0b448a895d24e48b5b063d7d-5bc02497-7025-4f3e-b041-b6e76ea42444");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");

const raw = JSON.stringify({
    "messages": [
        {
            "from": "447860088970",
            "to": "5511932307514",
            "messageId": "16cce4fd-bada-4682-b576-cdc8cf4e1776",
            "content": {
                "templateName": "test_whatsapp_template_en",
                "templateData": {
                    "body": {
                        "placeholders": ["Luana"]
                    }
                },
                "language": "en"
            }
        }
    ]
});

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

fetch("https://rk5vqy.api.infobip.com/whatsapp/1/message/template", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));