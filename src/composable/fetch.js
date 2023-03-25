const getImg = async () => {
    try{
        const res = await fetch('http://localhost:3004/image')
        const data = await res.json()
        return data
    }catch (err){
        console.log(err)
    }

}

const getImgById = async (id) => {
    try{
        const res = await fetch(`http://localhost:3004/image/${id}`)
        const data = await res.json()
        return data
    }catch (err){
        console.log(err)
    }
}

const deleteImg = async (id) => {
    try{
        const res = await fetch(`http://localhost:3004/image/${id}`, {
            method: 'DELETE'
        })
        const data = await res.json()
        return data
    }catch (err){
        console.log(err)
    }
}

export { getImg, getImgById, deleteImg }