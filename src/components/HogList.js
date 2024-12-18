import React, {useState} from 'react'
import Filter from './Filter'
import HogTile from './HogTile'

import hogs from "../porkers_data";

function HogList() {
    const [isShowingOnlyGreased, setIsShowingOnlyGreased] = useState(true)
    const [sortBy, setSortBy] = useState("name")

    const filteredHogs = hogs.filter(hog => {
        if (isShowingOnlyGreased) {
            return hogs.greased 
        }
        else {
            return true
        }
    })

    const sortedHogs = filteredHogs.sort((hogA, hogB) => {
        if (sortBy === "name") {
            return hogA.name.localeCompare(hogB.name)
            }
            else {
                return hogA.weight - hogB.weight
            }
    })

    const hogTiles = sortedHogs.map((hog) => {
        return <HogTile key={hog.name} hog={hog}/>;
    })
    
    function handleUpdateGreasedFilter() {
        setIsShowingOnlyGreased(!isShowingOnlyGreased)
    }
    function handleUpdateSort(newSort) {
        setSortBy(newSort)
    }

  return (
    <div>
      <Filter isShowingOnlyGreased={isShowingOnlyGreased}
      onUpdateGreasedFilter={handleUpdateGreasedFilter}
      sortBy={sortBy}
      onUpdateSort={handleUpdateSort}
      />
      {hogTiles}
    </div>
  )
}

export default HogList