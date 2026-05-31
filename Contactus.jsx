import React from 'react'

const Contactus = () => {
        const contactlist=[{id:1, name:"", mobile: 9435833211}, {id:2, name:"", mobile: 9953402023}];

    return (
       contactlist.map((list)=>(<div>For more information contact staff {list.name}, the mobile no. is {list.mobile}</div>))
    )
}

export default Contactus
