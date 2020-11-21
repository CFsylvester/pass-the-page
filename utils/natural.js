const natural = require('natural');
const Analyzer = require('natural').SentimentAnalyzer;
const stemmer = require('natural').PorterStemmer;
const analyzer = new Analyzer("English", stemmer, "afinn");
const tokenizer = new natural.WordTokenizer();

// Function to analyze story sentiment
const analyzeText = (stories) => {
    return new Promise((res, rej) => {
        res(stories.map(story => {
            const storyText = story.story_text;
            const splitText = tokenizer.tokenize(storyText);
            const analyzedText = analyzer.getSentiment(splitText);
            return {
                ...story,
                storyScore: analyzedText
            };
        }));
    });
};

module.exports = analyzeText;