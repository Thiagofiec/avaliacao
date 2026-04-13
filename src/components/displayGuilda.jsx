
export const displayGuilda = (membro) => {
    let rank = ""
    
    if(membro.poder == 100){
        rank = "SS+";
    } else if(membro.poder >= 95){
        rank = "SS";
    } else if(membro.poder >= 85){
        rank = "S";
    } else if(membro.poder >= 70 ){
        rank = "A";
    } else if(membro.poder >= 50){
        rank = "B";
    } else if(membro.poder >= 30){
        rank = "C";
    } else if(membro.poder >= 15){
        rank = "D";
    } else{
        rank = "F";
    }


    return(
        <>
            <div>
                <p>{membro.nome} {membro.poder} {rank}</p>
            </div>
        </>
    )
}

export default displayGuilda