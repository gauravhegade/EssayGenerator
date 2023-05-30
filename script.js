const form = document.querySelector('#essay-form');
const topicInput = document.querySelector('#topic-input');
const wordCountInput = document.querySelector('#word-count');
const toneInput = document.querySelector('#tone-input');
const outputContainer = document.querySelector('#output-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const topic = topicInput.value;
    const wordCount = wordCountInput.value;
    const tone = toneInput.value;
    generateEssay(topic, wordCount, tone);
});

async function generateEssay(topic, wordCount, tone) {
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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',
        },
        body: JSON.stringify({
            "model": "text-davinci-003",
            'prompt': `Write a ${wordCount}-word ${tone} essay on the topic of "${topic}".`,
            'max_tokens': parseInt(wordCount),
            'temperature': 0.7,
            'top_p': 1.0,
            'frequency_penalty': 0.0,
            'presence_penalty': 0.0,
        }),
    });

    const data = await response.json();
    console.log(data);
    const generatedEssay = data.choices[0].text;

    outputContainer.textContent = generatedEssay;
}
