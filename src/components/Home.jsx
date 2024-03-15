import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '@mui/material';
import Filters from './Filters';
import Planets from './Planets';
import { useDispatch, useSelector } from 'react-redux';
import { getPlanets } from '../redux/action';
import Animations from './Skeleton';

const Home = () => {
  const dispatch = useDispatch();
  const { planets, isloading } = useSelector((store) => {
    return {
      planets: store.planets,
      isloading: store.isloading
    }
  })

  const [input, setInput] = useState("")

  const search = () => {

    dispatch(getPlanets(input))
  }
  useEffect(() => {
    search()
  }, [])

  const handleChange = (e) => {
    setInput(e.target.value)

  }

  if (isloading) {
    return <Animations />
  }
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: "3vh" }} onClick={search}>
        <Input type='text' placeholder='        Search planets.........' sx={{ width: "400px", border: '1px solid #7b9dfd' }} value={input} onChange={handleChange} autoFocus />
        <SearchIcon sx={{ height: '40px', width: '50px', color: 'white', background: "#7b9dfd" }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '25% 65%', margin: 'auto', marginTop: "5%", gap: '2' }}>
        <Filters />
        <div>
        {planets?.map((el) => (
          <Planets key={el.id} {...el} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Home