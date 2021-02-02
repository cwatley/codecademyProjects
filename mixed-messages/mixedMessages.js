// message components, three different arrays: stocktickers, bid/ask+size+quote(not really an array), and 8-ball messages

let tickerArray = [['AAPL', 'Apple Inc.'], ['ABBV', 'AbbVie Inc.'], ['ABT', 'Abbott Laboratories'], ['ACN', 'Accenture'], ['ADBE', 'Adobe Inc.'], ['AIG', 'American International Group'], ['ALL', 'Allstate'], ['AMGN', 'Amgen Inc.'], ['AMT', 'American Tower'], ['AMZN', 'Amazon.com'], ['AXP', 'American Express'], ['BA', 'Boeing Co.'], ['BAC', 'Bank of America Corp'], ['BIIB', 'Biogen'], ['BK', 'The Bank of New York Mellon'], ['BKNG', 'Booking Holdings'], ['BLK', 'BlackRock Inc'], ['BMY', 'Bristol-Myers Squibb'], ['BRK.B', 'Berkshire Hathaway'], ['C', 'Citigroup Inc'], ['CAT', 'Caterpillar Inc.'], ['CHTR', 'Charter Communications'], ['CL', 'Colgate-Palmolive'], ['CMCSA', 'Comcast Corp.'], ['COF', 'Capital One Financial Corp.'], ['COP', 'ConocoPhillips'], ['COST', 'Costco Wholesale Corp.'], ['CRM', 'salesforce.com'], ['CSCO', 'Cisco Systems'], ['CVS', 'CVS Health'], ['CVX', 'Chevron Corporation'], ['DD', 'DuPont de Nemours Inc'], ['DHR', 'Danaher Corporation'], ['DIS', 'The Walt Disney Company'], ['DOW', 'Dow Inc.'], ['DUK', 'Duke Energy'], ['EMR', 'Emerson Electric Co.'], ['EXC', 'Exelon'], ['F', 'Ford Motor Company'], ['FB', 'Facebook, Inc.'], ['FDX', 'FedEx'], ['GD', 'General Dynamics'], ['GE', 'General Electric'], ['GILD', 'Gilead Sciences'], ['GM', 'General Motors'], ['GOOG', 'Alphabet Inc. (Class C)'], ['GOOGL', 'Alphabet Inc. (Class A)'], ['GS', 'Goldman Sachs'], ['HD', 'The Home Depot'], ['HON', 'Honeywell'], ['IBM', 'International Business Machines'], ['INTC', 'Intel Corp.'], ['JNJ', 'Johnson & Johnson'], ['JPM', 'JPMorgan Chase & Co.'], ['KHC', 'Kraft Heinz'], ['KMI', 'Kinder Morgan'], ['KO', 'The Coca-Cola Company'], ['LLY', 'Eli Lilly and Company'], ['LMT', 'Lockheed Martin'], ['LOW', 'Lowes'], ['MA', 'MasterCard Inc'], ['MCD', 'McDonalds Corp'], ['MDLZ', 'Mondelēz International'], ['MDT', 'Medtronic plc'], ['MET', 'MetLife Inc.'], ['MMM', '3M Company'], ['MO', 'Altria Group'], ['MRK', 'Merck & Co.'], ['MS', 'Morgan Stanley'], ['MSFT', 'Microsoft'], ['NEE', 'NextEra Energy'], ['NFLX', 'Netflix'], ['NKE', 'Nike, Inc.'], ['NVDA', 'Nvidia Corporation'], ['ORCL', 'Oracle Corporation'], ['PEP', 'PepsiCo'], ['PFE', 'Pfizer Inc'], ['PG', 'Procter & Gamble'], ['PM', 'Philip Morris International'], ['PYPL', 'PayPal'], ['QCOM', 'Qualcomm'], ['RTX', 'Raytheon Technologies'], ['SBUX', 'Starbucks Corp.'], ['SLB', 'Schlumberger'], ['SO', 'Southern Company'], ['SPG', 'Simon Property Group'], ['T', 'AT&T Inc'], ['TGT', 'Target Corporation'], ['TMO', 'Thermo Fisher Scientific'], ['TSLA', 'Tesla, Inc.'], ['TXN', 'Texas Instruments'], ['UNH', 'UnitedHealth Group'], ['UNP', 'Union Pacific Corporation'], ['UPS', 'United Parcel Service'], ['USB', 'U.S. Bancorp'], ['V', 'Visa Inc.'], ['VZ', 'Verizon Communications'], ['WBA', 'Walgreens Boots Alliance'], ['WFC', 'Wells Fargo'], ['WMT', 'Walmart']];


function bidAskSizeQuote() {
    let bidAsk;
    if ((Math.random() > .5)){
        bidAsk = 'bid';
    } else {
        bidAsk = 'ask';
    };
    let size = (Math.round((Math.random() * 8)+1) * 100);
    let num = (Math.random() * 200)
    let quote = num.toFixed(2);
    return `${bidAsk} ${size} shares @ $${quote}`
} 

//console.log(bidAskSizeQuote());


let eightBallArray = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes--definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', "Don't count on it", 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];

function lookIntoTheEightBall() {
    let rand1 = (Math.floor(Math.random()*100)); 
    let ticker = tickerArray[rand1][0];
    let name = tickerArray[rand1][1];
    let eightBallReply = eightBallArray[(Math.floor(Math.random()*20))];
    console.log(`Should I ${bidAskSizeQuote()} of ${ticker}, ${name}? ${eightBallReply}!`)
};

lookIntoTheEightBall();