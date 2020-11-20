const natural = require('natural');
const Analyzer = require('natural').SentimentAnalyzer;
const stemmer = require('natural').PorterStemmer;
const analyzer = new Analyzer("English", stemmer, "afinn");
const tokenizer = new natural.WordTokenizer();

// getSentiment expects an array of strings, so need to split text into an array of words using tokenizer

const analyzeText = (str) => {
    const splitText = tokenizer.tokenize(str);

    return analyzer.getSentiment(splitText);
};

// console.log('hatred:', analyzeText('i love sentiment analysis! i love sentiment analysis! i love sentiment analysis! i love sentiment analysis!'));
// console.log('positive:', analyzeText("The Great War was Won, The Last War is done, but winter is still here. Far from the ashes of King's Landing, The North remembers as it tries to rebuild...and beyond The Wall, the shadow of The Long Night still looms over those that do not kneel."));

module.exports = analyzeText;