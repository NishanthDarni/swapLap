import react from 'react'
import {useState} from 'react'
import axios from 'axios'
function Sell()
{   const [name,setName]=useState('');
    const [feature,setFeature]=useState('');
    const [description,setDescription]=useState('');
    const [price,setPrice]=useState(0)
    const [image,setImage]=useState()
    const handleSubmit=()=>{
        alert('Hello world1')
        const uri='http://localhost/swapLap/backend/ad.php'
        let fdata=new FormData()
        fdata.append('name',name)
        fdata.append('feature',feature)
        fdata.append('description',description)
        fdata.append('price',price)
        fdata.append('image',image)
        alert('Hello world2')
        axios.post(uri,fdata).then((response)=>{alert(response.data)}).catch((error)=>{alert(error)})
    }
    return(
        <div>
    <div>
        <h1>SELL YOUR LAPTOP</h1>
        <form>
            <h3>Laptop Name*</h3>
            <input type="text" name="lapname" required value={name} onChange={(e)=>setName(e.target.value)}/>
            <h3>Ad title*</h3>
            <textarea rows="5" cols="100" name="features" value={feature} required onChange={(e)=>setFeature(e.target.value)}></textarea><br/>
            <h3> Ad description*</h3>
            <textarea rows="5" cols="100" name="description" value={description} required onChange={(e)=>setDescription(e.target.value)}></textarea><br/>
            <h3>fix price*</h3>
            <input type="text" name="price" required value={price} onChange={(e)=>setPrice(e.target.value)}/><br/>
            <h3>upload images*</h3>
            <input type="file"  name="image" required onChange={(e)=>setImage(e.target.files[0])}/><br/><br/>
            <input type="submit" value="submit" name="submit" onClick={handleSubmit}/>
        </form>
    </div>
        </div>
    )
}

export default Sell;