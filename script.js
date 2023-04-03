
let pieces;


function getAllBlockes(){

    let p11 = document.getElementById('11');
    let p21 = document.getElementById('21');
    let p31 = document.getElementById('31');
    let p41 = document.getElementById('41');
    let p51 = document.getElementById('51');
    let p61 = document.getElementById('61');
    let p71 = document.getElementById('71');
    let p81 = document.getElementById('81');
// ------------------------------------------------------------------------------
    let p12 = document.getElementById('12');
    let p22 = document.getElementById('22');
    let p32 = document.getElementById('32');
    let p42 = document.getElementById('42');
    let p52 = document.getElementById('52');
    let p62 = document.getElementById('62');
    let p72 = document.getElementById('72');
    let p82 = document.getElementById('82');
// ------------------------------------------------------------------------------
    let p13 = document.getElementById('13');
    let p23 = document.getElementById('23');
    let p33 = document.getElementById('33');
    let p43 = document.getElementById('43');
    let p53 = document.getElementById('53');
    let p63 = document.getElementById('63');
    let p73 = document.getElementById('73');
    let p83 = document.getElementById('83');
// ------------------------------------------------------------------------------
    let p14 = document.getElementById('14');
    let p24 = document.getElementById('24');
    let p34 = document.getElementById('34');
    let p44 = document.getElementById('44');
    let p54 = document.getElementById('54');
    let p64 = document.getElementById('64');
    let p74 = document.getElementById('74');
    let p84 = document.getElementById('84');
// ------------------------------------------------------------------------------
    let p15 = document.getElementById('15');
    let p25 = document.getElementById('25');
    let p35 = document.getElementById('35');
    let p45 = document.getElementById('45');
    let p55 = document.getElementById('55');
    let p65 = document.getElementById('65');
    let p75 = document.getElementById('75');
    let p85 = document.getElementById('85');
// ------------------------------------------------------------------------------
    let p16 = document.getElementById('16');
    let p26 = document.getElementById('26');
    let p36 = document.getElementById('36');
    let p46 = document.getElementById('46');
    let p56 = document.getElementById('56');
    let p66 = document.getElementById('66');
    let p76 = document.getElementById('76');
    let p86 = document.getElementById('86');
// ------------------------------------------------------------------------------
    let p17 = document.getElementById('17');
    let p27 = document.getElementById('27');
    let p37 = document.getElementById('37');
    let p47 = document.getElementById('47');
    let p57 = document.getElementById('57');
    let p67 = document.getElementById('67');
    let p77 = document.getElementById('77');
    let p87 = document.getElementById('87');
// ------------------------------------------------------------------------------
    let p18 = document.getElementById('18');
    let p28 = document.getElementById('28');
    let p38 = document.getElementById('38');
    let p48 = document.getElementById('48');
    let p58 = document.getElementById('58');
    let p68 = document.getElementById('68');
    let p78 = document.getElementById('78');
    let p88 = document.getElementById('88');

    pieces = [p11,p12,p13,p14,p15,p16,p17,p18,p21,p22,p23,p24,p25,p26,p27,p28,p31,p32,p33,p34,p35,p36,p37,p38,p41,p42,p43,p44,p45,p46,p47,p48,p51,p52,p53,p54,p55,p56,p57,p58,p61,p62,p63,p64,p65,p66,p67,p68,p71,p72,p73,p74,p75,p76,p77,p78,p81,p82,p83,p84,p85,p86,p87,p88]

}
getAllBlockes();

function setInitialPieces(pieces){

    pieces[1].classList.add('whitePawn');
    pieces[9].classList.add('whitePawn');
    pieces[17].classList.add('whitePawn');
    pieces[25].classList.add('whitePawn');
    pieces[33].classList.add('whitePawn');
    pieces[41].classList.add('whitePawn');
    pieces[49].classList.add('whitePawn');
    pieces[57].classList.add('whitePawn');

    pieces[6].classList.add('blackPawn');
    pieces[14].classList.add('blackPawn');
    pieces[22].classList.add('blackPawn');
    pieces[30].classList.add('blackPawn');
    pieces[38].classList.add('blackPawn');
    pieces[46].classList.add('blackPawn');
    pieces[54].classList.add('blackPawn');
    pieces[62].classList.add('blackPawn');

    pieces[0].classList.add('whiteRook');
    pieces[8].classList.add('whiteKnight');
    pieces[16].classList.add('whiteBishop');
    pieces[24].classList.add('whiteQueen');
    pieces[32].classList.add('whiteKing');
    pieces[40].classList.add('whiteBishop');
    pieces[48].classList.add('whiteKnight');
    pieces[56].classList.add('whiteRook');

    pieces[7].classList.add('blackRook');
    pieces[15].classList.add('blackKnight');
    pieces[23].classList.add('blackBishop');
    pieces[31].classList.add('blackQueen');
    pieces[39].classList.add('blackKing');
    pieces[47].classList.add('blackBishop');
    pieces[55].classList.add('blackKnight');
    pieces[63].classList.add('blackRook');

}
setInitialPieces(pieces);

let blockes = Array.from(document.getElementsByClassName('a'));

blockes.forEach(block => {
    block.addEventListener('click',blockClicked)
});


let firstBlockClicked = null , secondBlockClicked = null;
// let piecesOnFisrt = null , piecesOnsecond = null;





function blockClicked(block){

    

    if(firstBlockClicked == null){
        firstBlockClicked = block.target.id;
        var lite = document.getElementById(firstBlockClicked);
        lite.style.boxShadow = '0px 0px 20px rgba(51, 255, 0, 0.872)';
        
    }
    else if(secondBlockClicked == null){
        secondBlockClicked = block.target.id;
        
        lite = document.getElementById(firstBlockClicked);
        lite.style.boxShadow = '0px 0px 0px 0px rgba(0,0,0)';
        
        // console.log(`first = ${piecesOnFisrt} ${firstBlockClicked} second = ${piecesOnsecond} ${secondBlockClicked}`);

        let status = checkMoves(firstBlockClicked,secondBlockClicked);
        if(status){
            status = sameColorCheck(firstBlockClicked,secondBlockClicked);
            if(!status){
                movePieces(firstBlockClicked,secondBlockClicked);
            }
        }
    
        firstBlockClicked = null;
        secondBlockClicked = null;
        
    }
}


function getPiecePresent(position){
    for(let i=0 ; i<pieces.length ; i++){
        if(pieces[i].id == position){
            let classlist = Array.from(pieces[i].classList);
                return(classlist[1]);
        }
    }
}

function checkMoves(firstBlockClicked,secondBlockClicked){

    let e = parseInt(secondBlockClicked);
    let s = parseInt(firstBlockClicked);  
    
    piecesOnFisrt = getPiecePresent(s);
    piecesOnsecond = getPiecePresent(e);

    if(piecesOnFisrt==null){ 
        return false;
    }
    else if(piecesOnFisrt == "blackKnight" || piecesOnFisrt == "whiteKnight"){ 
        if((e==s+19)||(e==s+21)||(e==s-19)||(e==s-21)||(e==s-12)||(e==s+12)||(e==s-8)||(e==s+8))
            return true;
        else
            return false;
    }
    else if(piecesOnFisrt == "blackBishop" || piecesOnFisrt == "whiteBishop"){ 
        if(e==(s+11) || e==(s+22) || e==(s+33) || e==(s+44) || e==(s+55) || e==(s+66) || e==(s+77) )
  		    return true;
  	    else if(e==(s-11) || e==(s-22) || e==(s-33) || e==(s-44) || e==(s-55) || e==(s-66) || e==(s-77) )
  		    return true;
  	    else if(e==(s-9) || e==(s-18) || e==(s-27) || e==(s-36) || e==(s-45) || e==(s-54) || e==(s-63) )
  		    return true;
  	    else if(e==(s+9) || e==(s+18) || e==(s+27) || e==(s+36) || e==(s+45) || e==(s+54) || e==(s+63) )
  		    return true;
  	    else 
  		    return false;
    }
    else if(piecesOnFisrt == "blackRook" || piecesOnFisrt == "whiteRook"){
        if(e==(s+10) || e==(s+20) || e==(s+30) || e==(s+40) || e==(s+50) || e==(s+60) || e==(s+70))
		    return true;
	    else if(e==(s-10) || e==(s-20) || e==(s-30) || e==(s-40) || e==(s-50) || e==(s-60) || e==(s-70))
		    return true;
	    else if(e==(s+1) || e==(s+2) || e==(s+3) || e==(s+4) || e==(s+5) || e==(s+6) || e==(s+7))
		    return true;
	    else if(e==(s-1) || e==(s-2) || e==(s-3) || e==(s-4) || e==(s-5) || e==(s-6) || e==(s-7))
		    return true;
  	    else 
  		    return false;
    }
    else if(piecesOnFisrt == "blackKing" || piecesOnFisrt == "whiteKing"){
        if(e==(s+1) || e==(s-1) || e==(s+10) || e==(s-10) || e==(s+11) || e==(s-11) || e==(s+9) || e==(s-9))
		    return true;
	    else 
		    return false;
    }
    else if(piecesOnFisrt == "whitePawn"){
        if(piecesOnsecond == null){
			if(e==(s+2) && ((s==12) || (s==22) || (s==32) || (s==42) || (s==52) || (s==62) || (s==72) || (s==82) ))
                return true;
            else if(e==(s+1))
                return true;
            else
                return false;
        }
        else if(piecesOnsecond != null){
            if(e==(s+11) || e==(s-9))
                return true;
        }
        else{
            return false;
        }
    }
    else if(piecesOnFisrt == "blackPawn"){
        if(piecesOnsecond == null){
			if(e==(s-2) && ((s==17) || (s==27) || (s==37) || (s==47) || (s==57) || (s==67) || (s==77) || (s==87) ))
                return true;
            else if(e==(s-1))
                return true;
            else
                return false;
        }
        else if(piecesOnsecond != null){
            if(e==(s-11) || e==(s+9))
                return true;
        }
        else{
            return false;
        }
    }
    else if(piecesOnFisrt == "blackQueen" || piecesOnFisrt == "whiteQueen"){
        if(e==(s+10) || e==(s+20) || e==(s+30) || e==(s+40) || e==(s+50) || e==(s+60) || e==(s+70))
		    return true;
	    else if(e==(s-10) || e==(s-20) || e==(s-30) || e==(s-40) || e==(s-50) || e==(s-60) || e==(s-70))
		    return true;
	    else if(e==(s+1) || e==(s+2) || e==(s+3) || e==(s+4) || e==(s+5) || e==(s+6) || e==(s+7))
		    return true;
	    else if(e==(s-1) || e==(s-2) || e==(s-3) || e==(s-4) || e==(s-5) || e==(s-6) || e==(s-7))
		    return true;

  	    else if(e==(s+11) || e==(s+22) || e==(s+33) || e==(s+44) || e==(s+55) || e==(s+66) || e==(s+77) )
  		    return true;
  	    else if(e==(s-11) || e==(s-22) || e==(s-33) || e==(s-44) || e==(s-55) || e==(s-66) || e==(s-77) )
  		    return true;
  	    else if(e==(s-9) || e==(s-18) || e==(s-27) || e==(s-36) || e==(s-45) || e==(s-54) || e==(s-63) )
  		    return true;
  	    else if(e==(s+9) || e==(s+18) || e==(s+27) || e==(s+36) || e==(s+45) || e==(s+54) || e==(s+63) )
  		    return true;
  	    else 
  		    return false;
    }

    // return true;
        
}

function movePieces(firstBlockClicked,secondBlockClicked){

    let piecesOnFisrt = getPiecePresent(firstBlockClicked);
    let piecesOnsecond = getPiecePresent(secondBlockClicked);

    let first = document.getElementById(firstBlockClicked);
    first.classList.remove(piecesOnFisrt);

    let second = document.getElementById(secondBlockClicked);
    second.classList.remove(piecesOnsecond);
    second.classList.add(piecesOnFisrt);


}

function sameColorCheck(firstBlockClicked,secondBlockClicked){

    piecesOnFisrt = getPiecePresent(firstBlockClicked);
    piecesOnsecond = getPiecePresent(secondBlockClicked);

    if(piecesOnsecond == null)
        return false;

    let n1 = piecesOnFisrt.slice(0,1);
    let n2 = piecesOnsecond.slice(0,1);
    // console.log(`n1 = ${n1} and n2 = ${n2}`);

    if(n1 == n2)
        return true;
    else
        return false;

    
}
