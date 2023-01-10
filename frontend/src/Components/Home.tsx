import React from 'react'
import { IPuppy } from '../../../interface'
import AddPuppy from './AddPuppy'
import PuppiesList from './PuppiesList'

const Home = () => {
  return (
    <div>
        <AddPuppy addPuppy={function (newPuppy: IPuppy): void {
              throw new Error('Function not implemented.')
          } }/>
          <PuppiesList />
    </div>
  )
}

export default Home