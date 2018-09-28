import React from 'react';

import HomeButtons from './HomeButtons';
import HomeRadios from './HomeRadios';
import HomeSubHeader from './HomeSubHeader';
import HomeScores from './HomeScores';
import HomeCards from './HomeCards';
import seedrandom from 'seedrandom'

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cards: [],
            endGame: 0,
            cardsClicked: [],
            playState1: false,
            playState2: false,
            playerTurn: null,
            difE: false,
            difM: false,
            difH: false,
            start: false,
            reset: false,
            cColor: false,
            cNum: false,
            cPic: false,
            cIcon: false,
            cAll: false,
            score1: 0,
            score2: 0,
            ranNum: 0
        };
        this.playerSelect = this.playerSelect.bind(this);
        this.difficulty = this.difficulty.bind(this);
        this.startReset = this.startReset.bind(this);
        this.diffCards = this.diffCards.bind(this);
        this.shuffle = this.shuffle.bind(this);
        this.cardClick = this.cardClick.bind(this);
        this.declareWinner = this.declareWinner.bind(this);
        this.makeCards = this.makeCards.bind(this);
    }
    
    playerSelect(e) {
        if (e.target.value == "p1") {
            this.setState({
                playState1: true
            });
            if (this.state.playState2){
                this.setState({
                    playState2: false
                });
            }
        }
        else if (e.target.value == "p2") {
            this.setState({
                playState2: true
            });
            if (this.state.playState1) {
                this.setState({
                    playState1: false
                });
            }
        }
    }
    difficulty(e) {
        if (e.target.value == "e") {
            this.setState({
                difE: true
            });
            if (this.state.difM){
                this.setState({
                    difM: false
                });
            }
            else if (this.state.difH){
                this.setState({
                    difH: false
                });
            }
        }
        else if (e.target.value == "m") {
            this.setState({
                difM: true
            });
            if (this.state.difE){
                this.setState({
                    difE: false
                });
            }
            else if (this.state.difH) {
                this.setState({
                    difH: false
                });
            }
        }
        else if (e.target.value == "h") {
            this.setState({
                difH: true
            });
            if (this.state.difE){
                this.setState({
                    difE: false
                });
            }
            else if (this.state.difM){
                this.setState({
                    difM: false
                });
            }
        }
    }
    diffCards(e){
        if (e.target.value == "col") {
            this.setState({
                cColor: true
            });
            if (this.state.cNum){
                this.setState({
                    cNum: false
                });
            }
            else if (this.state.cPic){
                this.setState({
                    cPic: false
                });
            }
            else if (this.state.cIcon){
                this.setState({
                    cIcon: false
                });
            }
            else if (this.state.cAll){
                this.setState({
                    cAll: false
                });
            }
        }
        else if (e.target.value == "num") {
            this.setState({
                cNum: true
            });
            if (this.state.cColor){
                this.setState({
                    cColor: false
                });
            }
            else if (this.state.cPic){
                this.setState({
                    cPic: false
                });
            }
            else if (this.state.cIcon){
                this.setState({
                    cIcon: false
                });
            }
            else if (this.state.cAll){
                this.setState({
                    cAll: false
                });
            }
        }
        else if (e.target.value == "pic") {
            this.setState({
                cPic: true
            });
            if (this.state.cColor){
                this.setState({
                    cColor: false
                });
            }
            else if (this.state.cNum){
                this.setState({
                    cNum: false
                });
            }
            else if (this.state.cIcon){
                this.setState({
                    cIcon: false
                });
            }
            else if (this.state.cAll){
                this.setState({
                    cAll: false
                });
            }
        }
        else if (e.target.value == "i") {
            this.setState({
                cIcon: true
            });
            if (this.state.cColor){
                this.setState({
                    cColor: false
                });
            }
            else if (this.state.cNum){
                this.setState({
                    cNum: false
                });
            }
            else if (this.state.cPic){
                this.setState({
                    cPic: false
                });
            }
            else if (this.state.cAll){
                this.setState({
                    cAll: false
                });
            }
        }
        else if (e.target.value == "all") {
            this.setState({
                cAll: true
            });
            if (this.state.cColor){
                this.setState({
                    cColor: false
                });
            }
            else if (this.state.cNum){
                this.setState({
                    cNum: false
                });
            }
            else if (this.state.cPic){
                this.setState({
                    cPic: false
                });
            }
            else if (this.state.cIcon){
                this.setState({
                    cIcon: false
                });
            }
        }
    }
    makeCards(limit, arr) {
        let cardType = [];
        let difficulty = this.state.difE ? 0 : (this.state.difM ? 1 : 2);
        let wImg, hImg;
        if (difficulty == 0) {
            wImg= 83;
            hImg= 97;
        }
        else if (difficulty == 1) {
            wImg= 57;
            hImg= 67;
        }
        else if (difficulty == 2) {
            wImg= 42;
            hImg= 56;
        }
        Math.seedrandom(`randomVal.${this.state.ranNum}`);
       
        if (this.state.playState2) {
            //randomize which player goes first
            let playFirst = (Math.floor(Math.random() * 99) + 1) % 2;
            alert(`player ${playFirst + 1} goes first`);
            if (playFirst == 0) {
                this.setState({
                    playerTurn: 0
                });
            }
            else if (playFirst == 1) {
                this.setState({
                    playerTurn: 1
                });
            }
        }
        
        if (this.state.cColor){
            let ran1, ran2, ran3, i, j;
            for (i = 0; i < limit/2; ++i) {
                ran1 = Math.floor(Math.random() * 255) + 0;
                ran2 = Math.floor(Math.random() * 255) + 0;
                ran3 = Math.floor(Math.random() * 255) + 0;
                const colors = {
                    backgroundColor: `rgb(${ran1}, ${ran2}, ${ran3})`,
                    borderRadius: `5px`
                };
                let coloredCard = <div style={colors}></div>
                while (cardType.includes({render: coloredCard , val: ran1 + ran2 + ran3})) {
                    ran1 = Math.floor(Math.random() * 255) + 0;
                    ran2 = Math.floor(Math.random() * 255) + 0;
                    ran3 = Math.floor(Math.random() * 255) + 0;
                    const colors = { 
                        backgroundColor: `rgb(${ran1}, ${ran2}, ${ran3})`,
                        borderRadius: `5px`
                    };
                    let coloredCard = <div style={colors}></div>;
                }
                for (j = 0; j < 2; ++j){
                    cardType.push({render: coloredCard , val: ran1 + ran2 + ran3});
                }
            }
        }
        else if (this.state.cNum) {
            let random, i, j;
            for (i = 0; i < limit/2; ++i) {
                random = Math.floor(Math.random() * 999) + 0;
                while (cardType.includes({render: random, val: random})) {
                    random = Math.floor(Math.random() * 999) + 0;
                }
                for (j = 0; j < 2; ++j){
                    cardType.push({render: random, val: random});
                }
            }
        }
        else if (this.state.cPic || this.state.cIcon){
            let random, i, j;
            const inStyles = { borderRadius: `5px`};
            let arrValues = [];
            let arrRanVal = Array(limit/2);
            for(var g=0; g < arrRanVal.length; g++) {
                arrRanVal[g] = g;
            }

            for (i = 0; i < limit/2; ++i) {
                random = Math.floor(Math.random() * (arrRanVal.length - 1)) + 0;
                let ranImg = this.state.cPic ? 
                    <img src={`/imageBackCard/${arrRanVal[random]}.jpg`} style={inStyles} width={wImg} height={hImg} alt="random image"/>
                    :
                    <img src={`/icons/download (${arrRanVal[random]}).png`} style={inStyles} width={wImg} height={hImg} alt="random image"/>;
                
                while (arrValues.includes(arrRanVal[random])) {
                    random = Math.floor(Math.random() * (arrRanVal.length - 1)) + 0;
                    ranImg = this.state.cPic ? 
                        <img src={`/imageBackCard/${arrRanVal.random}.jpg`} style={inStyles} width={wImg} height={hImg} alt="random image"/>
                        :
                        <img src={`/icons/download (${arrRanVal.random}).png`} style={inStyles} width={wImg} height={hImg} alt="random image"/>;
                }
                for (j = 0; j < 2; ++j){
                    cardType.push({render: ranImg, val: arrRanVal[random]});
                    arrValues.push(arrRanVal[random]);
                }
                arrRanVal.splice(random, 1);
            }
        }
        else if (this.state.cAll){
            const inStyles = { borderRadius: `5px`};
            //cColor
            let ran1, ran2, ran3, a, b;
            for (a = 0; a < limit/8; ++a) {
                ran1 = Math.floor(Math.random() * 255) + 0;
                ran2 = Math.floor(Math.random() * 255) + 0;
                ran3 = Math.floor(Math.random() * 255) + 0;
                const colors = {
                    backgroundColor: `rgb(${ran1}, ${ran2}, ${ran3})`,
                    borderRadius: inStyles
                };
                let coloredCard = <div style={colors}></div>
                while (cardType.includes({render: coloredCard , val: ran1 + ran2 + ran3})) {
                    ran1 = Math.floor(Math.random() * 255) + 0;
                    ran2 = Math.floor(Math.random() * 255) + 0;
                    ran3 = Math.floor(Math.random() * 255) + 0;
                    const colors = { backgroundColor: `rgb(${ran1}, ${ran2}, ${ran3})`};
                    let coloredCard = <div style={colors}></div>;
                }
                for (b = 0; b < 2; ++b){
                    cardType.push({render: coloredCard , val: ran1 + ran2 + ran3});
                }
            }
            //cNum
            let ranNum, c, d;
            for (c = 0; c < limit/8; ++c) {
                ranNum = Math.floor(Math.random() * 999) + 0;
                while (cardType.includes({render: ranNum, val: ranNum})) {
                    ranNum = Math.floor(Math.random() * 999) + 0;
                }
                for (d = 0; d < 2; ++d){
                    cardType.push({render: ranNum, val: ranNum});
                }
            }
            //cPic and cIcon
            let random, e, f;
            let arrValues = [];
            let arrRanVal = Array(Math.floor(limit/8));
            for(var g=0; g < arrRanVal.length; g++) {
                arrRanVal[g] = g;
            }

            for (e = 0; e < limit/8; ++e) {
                random = Math.floor(Math.random() * (arrRanVal.length - 1)) + 0;
                let ranImg1 = 
                    <img src={`/imageBackCard/${arrRanVal[random]}.jpg`} style={inStyles} width={wImg} height={hImg} alt="random image"/>;
                let ranImg2 = 
                    <img src={`/icons/download (${arrRanVal[random]}).png`} style={inStyles} width={wImg} height={hImg} alt="random image"/>;
                
                while (arrValues.includes(arrRanVal[random])) {
                    random = Math.floor(Math.random() * (arrRanVal.length - 1)) + 0;
                    ranImg1 = 
                        <img src={`/imageBackCard/${arrRanVal[random]}.jpg`} style={inStyles} width={wImg} height={hImg} alt="random image"/>;
                    ranImg2 = 
                        <img src={`/icons/download (${arrRanVal[random]}).png`} style={inStyles} width={wImg} height={hImg} alt="random image"/>;
                }
                for (f = 0; f < 2; ++f){
                    cardType.push({render: ranImg1, val: arrRanVal[random]});
                    cardType.push({render: ranImg2, val: arrRanVal[random]});
                    arrValues.push(arrRanVal[random]);
                }
                arrRanVal.splice(random, 1);
            }
        }
        let k;
        for (k = 0; k < limit; ++k) {
            let card = <HomeCards key={arr.length} check={false} oddEven={arr.length % 2} 
                    value={cardType[k].val} rendType={cardType[k].render} change={this.cardClick} diff={difficulty}/>;
            arr.push({render: card, key: arr.length, check: false, oddEven: arr.length % 2, value: cardType[k].val});
        }
    }
    startReset(e) {
        if (e == true || e.target.name == "start"){
            if (this.state.start) return;
            if (this.state.reset && !this.state.start){
                this.setState({
                    reset: true
                });
            }

            //check if a button per section was selected
            if (this.state.playState1 == false && this.state.playState2 == false) {
                alert("Please select the number of players");
                return;
            }
            if (this.state.difE == false && this.state.difM == false && this.state.difH == false) {
                alert("Please select the game's difficulty level");
                return;
            }
            if (this.state.cColor == false && this.state.cNum == false && this.state.cPic == false 
                && this.state.cIcon == false && this.state.cAll == false) {
                alert("Please select card matching type");
                return;
            }

            let limit = this.state.difE ? 36 : (this.state.difM ? 64 : 100)
            let arr = this.state.cards;
            this.makeCards(limit, arr);
            this.shuffle(arr);
            this.setState({
                cards: arr,
                start: true
            });
        }
        else if (e == false || e.target.name == "reset"){
            let arr1 = [];
            let arr2 = []
            this.setState({
                cards: arr1,        cardsClicked: arr2,
                playState1: false,      playState2: false,      playerTurn: null,
                difE: false,        difM: false,        difH: false,
                cColor: false,      cNum: false,        cPic: false,
                cIcon: false,       cAll: false,
                start: false,       reset: false,
                score1: 0,          score2: 0,          endGame: 0,
                start: false,       reset: true,        ranNum: this.state.ranNum + 1
            });
        }
    }
    shuffle (arr) {   //Fisher–Yates shuffle
        var i = 0
            , j = 0
            , temp = null
      
        for (i = arr.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    cardClick(e) {
        let difficulty = this.state.difE ? 0 : (this.state.difM ? 1 : 2);
        let i;
        for (i = 0; i < this.state.cards.length; ++i) {
            if (this.state.cards[i].value == e.target.value && this.state.cards[i].oddEven == e.target.name) {
                let card = <HomeCards key={this.state.cards[i].key} check={true} 
                    oddEven={this.state.cards[i].oddEven} value={this.state.cards[i].value} 
                    change={this.cardClick} diff={difficulty}/>

                let dummy = this.state.cards;
                dummy[i].render = card;
                dummy[i].check = true;
                let arr = this.state.cardsClicked;
                arr.push({value: e.target.value, oddEven: e.target.name, index: i});
                this.setState({
                    cards: dummy,
                    cardsClicked: arr
                });
                break;
            }
        }
        if (this.state.cardsClicked.length == 2) {
            if (this.state.cardsClicked[0].value == this.state.cardsClicked[1].value) {
                //single player
                if (this.state.playState1) {
                    this.setState({
                        score1: this.state.score1 + 10, 
                        endGame: this.state.endGame +2
                        }, () => {
                        this.declareWinner();
                    });
                }
                //two players
                else if (this.state.playState2) {
                    if (this.state.playerTurn == 0) {
                        this.setState({
                            score1: this.state.score1 + 10,
                            playerTurn: 0,
                            endGame: this.state.endGame + 2
                        }, () => {
                            this.declareWinner();
                        });
                    }
                    else if (this.state.playerTurn == 1) {
                        this.setState({
                            score2: this.state.score2 + 10,
                            playerTurn: 1,
                            endGame: this.state.endGame + 2
                        }, () => {
                            this.declareWinner();
                        });
                    }
                }

                let arr = [];
                this.setState({
                    cardsClicked: arr
                });
            }
            else if (this.state.cardsClicked[0].value != this.state.cardsClicked[1].value) {
                setTimeout(() => {
                    let card1 = <HomeCards key={this.state.cards[this.state.cardsClicked[0].index].key} 
                            check={false} oddEven={this.state.cardsClicked[0].oddEven}
                            value={this.state.cardsClicked[0].value} 
                            change={this.cardClick} diff={difficulty}/>
                    let card2 = <HomeCards key={this.state.cards[this.state.cardsClicked[1].index].key} 
                                check={false} oddEven={this.state.cardsClicked[1].oddEven}
                                value={this.state.cardsClicked[1].value} 
                                change={this.cardClick} diff={difficulty}/>

                    let dummy = this.state.cards;
                    dummy[this.state.cardsClicked[0].index].render = card1;
                    dummy[this.state.cardsClicked[0].index].check = false;
                    dummy[this.state.cardsClicked[1].index].render = card2;
                    dummy[this.state.cardsClicked[1].index].check = false;
                    let arr = [];
                    this.setState({
                        cards: dummy,
                        cardsClicked: arr
                    });

                    //single player
                    if (this.state.playState1) {
                        this.setState({
                            score1: this.state.score1 - 2
                        });
                    }
                    //two players
                    else if (this.state.playState2) {
                        if (this.state.playerTurn == 0) {
                            this.setState({
                                score1: this.state.score1 - 2,
                                playerTurn: 1
                            });
                        }
                        else if (this.state.playerTurn == 1) {
                            this.setState({
                                score2: this.state.score2 - 2,
                                playerTurn: 0
                            });
                        }
                    }
                }, 1050);
            }
        }
    }
    declareWinner () {
        if ((this.state.endGame) == this.state.cards.length) {
            if (this.state.playState1) {
                if (this.state.score1 <= 0) {
                    alert("Game Over, you lost");
                }
                else if (this.state.score1 > 1) {
                    alert("Game Over, you win!!!");
                }
            } 
            else if (this.state.playState2) {
                if (this.state.score1 > this.state.score2) {
                    alert("Game Over, Player 1 WINS!!!");
                }
                else if (this.state.score1 < this.state.score2) {
                    alert("Game Over, Player 2 WINS!!!");
                }
                else if (this.state.score1 == this.state.score2) {
                    alert("Game Over, Tie Game!!!");
                }
            } 
        }
    }

    render() {
        return (
            <div className="container__Home">
                <h1 className="text-jumboHeader__Home">Match All the Cards to Win the Game</h1>
                <p className="text-SubHeader__Home">
                    After clicking 2 cards, if they're not a match, click again only after both cards are flipped back
                </p>

                <div className="div--spacing__Home">
                    <HomeSubHeader label="Select Number of Players"/>
                    <HomeRadios label="1 Player" val="p1" name="player" check={this.state.playState1} change={this.playerSelect}/>
                    <HomeRadios label="2 Players" val="p2" name="player" check={this.state.playState2} change={this.playerSelect}/>
                    
                    <HomeSubHeader label="Difficulty Level"/>
                    <HomeRadios label="Easy" val="e" name="difficulty" check={this.state.difE} change={this.difficulty} />
                    <HomeRadios label="Medium" val="m" name="difficulty" check={this.state.difM} change={this.difficulty}/>
                    <HomeRadios label="Hard" val="h" name="difficulty" check={this.state.difH} change={this.difficulty}/>

                    <HomeSubHeader label="Differentiate Cards by:"/>
                    <HomeRadios label="Colors" val="col" name="cardType" check={this.state.cColor} change={this.diffCards}/>
                    <HomeRadios label="Numbers" val="num" name="cardType" check={this.state.cNum} change={this.diffCards}/>
                    <HomeRadios label="Pictures" val="pic" name="cardType" check={this.state.cPic} change={this.diffCards}/>
                    <HomeRadios label="Icons" val="i" name="cardType" check={this.state.cIcon} change={this.diffCards}/>
                    <HomeRadios label="All" val="all" name="cardType" check={this.state.cAll} change={this.diffCards}/>

                    <HomeSubHeader label="Game:"/>
                    <HomeButtons label="Start" name="start" class="btn btn--spacing__Home btn-primary" click={this.startReset}/>
                    <HomeButtons label="Reset" name="reset" class="btn btn--spacing__Home btn-danger" click={this.startReset}/>
                    
                    <HomeSubHeader label="Player Scores:"/>
                    <i className="fas fa-question-circle"></i>
                    <div>
                        <HomeScores label="Player 1:" score={this.state.score1}/>
                        <HomeScores label="Player 2:" score={this.state.score2}/>
                    </div>
                </div>

                <div className="div--spacing__Home card-view--size">
                    {this.state.cards.map(obj => {
                        return obj.render;
                    })}
                </div>
            </div>
        );
    }
};