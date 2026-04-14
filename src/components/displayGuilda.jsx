
export const displayGuilda = (membro) => {
    
    const poder = Number(membro.poder)
    
    let rank = ""
    let style = ""
    
    if(poder === 100){
        rank = "SS+";
        style = "bg-gradient-to-r from-yellow-300 to-yellow-500 text-white shadow-xl border border-yellow-400"
    } else if(poder >= 95){
        rank = "SS";
        style = "bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-lg border border-purple-300"
    } else if(poder >= 85){
        rank = "S";
        style = "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md border border-blue-300"
    } else if(poder >= 70 ){
        rank = "A";
        style = "bg-green-400 text-white shadow-md border border-green-300"
    } else if(poder >= 50){
        rank = "B";
        style = "bg-gray-200 text-gray-800 shadow-sm border border-gray-300"
    } else if(poder >= 30){
        rank = "C";
        style = "bg-orange-200 text-orange-900 shadow-sm border border-orange-300"
    } else if(poder >= 15){
        rank = "D";
        style = "bg-red-300 text-white shadow-sm border border-red-400"
    } else{
        rank = "F";
        style = "bg-gray-800 text-gray-400 border border-gray-700 opacity-70"
    }


    return( 
            <div className={style}>
                <p>{membro.nome} {membro.poder} {rank}</p>
            </div>
    )
}

export default displayGuilda