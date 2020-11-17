const natural = require('natural');
const Analyzer = require('natural').SentimentAnalyzer;
const stemmer = require('natural').PorterStemmer;
const analyzer = new Analyzer("English", stemmer, "afinn");
const tokenizer = new natural.WordTokenizer();

// getSentiment expects an array of strings, so need to split text into an array of words using tokenizer

const analyzeText = (str) => {
    const splitText = tokenizer.tokenize(str);
    console.log(analyzer.getSentiment(splitText));

    return analyzer.getSentiment(splitText);
};

// console.log('natural result:', analyzeText(love));

module.exports = analyzeText;