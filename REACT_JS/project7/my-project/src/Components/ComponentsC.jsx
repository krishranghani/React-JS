import React from 'react'
import { data, data1 } from './Main'

const ComponentsC = () => {
  return (
    <div>
      <data.Consumer>
        {
          (name) => {
            return (
              <>
                <data1.Consumer>
                  {
                    (gender) => {
                      return (
                        <>
                          <h1 className='heading'>This is Components C {name} {gender}</h1>
                        </>
                      )
                    }
                  }
                </data1.Consumer>
              </>
            )
          }
        }
      </data.Consumer>
    </div>
  )
}

export default ComponentsC