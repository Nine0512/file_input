const getImg = async () => {
    try{
        const res = await fetch('http://localhost:3004/image')
        const data = await res.json()
        return data
    }catch (err){
        console.log(err)
    }

}

export { getImg }