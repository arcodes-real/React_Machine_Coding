import React from 'react'
import {Usercontext} from "./Source"

export default function F() {
  return (
    <div>
      <Usercontext.Consumer>
        {
            user => {
                return(
                    <div>
                        User context value {user}
                    </div>
                )
            }
        }
      </Usercontext.Consumer>
    </div>
  )
}
