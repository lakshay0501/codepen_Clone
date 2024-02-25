import React from 'react'

const logo = "data:image/jpeg;base64,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"
const accountLogo = "data:image/jpeg;base64,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"
const userAvatar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAb1BMVEUNfoD///8Ae30Adnj7/f0AcHLt9PSiw8P2+vpTnZ7y+Pjl8PCBsrMAdHdMl5kxioy+29upzc7U5OS91tdaoqN3qKmIr7CJubqSvb6x0dIxhIZEjI48h4hhoKGaxMXO5OR6tbZvrrA9k5Uah4nK2tuXb2ZTAAAD90lEQVR4nO3bYXeqIBwGcAVyJqaJOTGHpvb9P+PVWlsmnVZ4cTvn+b2698X47xkIKug4AAAAAAAAAAAAAAAAAAAAAAAAALMiJwuVduYs3Te1L6Oo3DvW8/QFP8r1jKVJrKraZ8ytKxVbjUOcOEu4y1hQS9XNUZmqred+YmlmMQ1xDttLZZcnETVvMePuFR46ttKQuPKuS4udaZpNOGrQdb3cUt+QfeWPS/O1WRqiuHuDZ5bChP5taVGalCZdetug625jK2kiMS2dmIwK2kw6pp8FQith5LSyy00mAVpoWnQTG3PAvtZUZm+blxsk8VbTosuNhu4PS3/oKrvp639HOr38T9YWwuy0lUX7epgs0Da5sxDmoA8TIczgFw6z18OQWDeluIGNCaDUhtka3G4SzZrZt7i3MTVrB0Vhss7c3pmd2Fk0K01lrgzCaMeZwbh9pnSk6ZrUqEnaTLrGt9MxuvnM9LZ5k9/Mzqyy9giQsHHpQL1+M3NukuSjvvEqO/fMQ+m4GD0EeKFhlr7JzU58dQ4TIbX52CzFV+d42/VqhjZpm6fCY77PU9nafaFBoreU+z7zRBrG5q8ATm1SJ8re399VZ7FbLqU71VfOIme+0oTQwRJvAZerDAAAAAAAAAAAAPAyQpc6WDk7Qh2VZdEyceat2reWFdzzRD7L4cYni9Ouo/NsQQz6XknPO5yBnK3RHxdvi1qkajNLnP5aUenX7p3RfvMraHPaamNFa77XRVZOU1/vBkrb4+yyd+fldGN08fRRwpsd9MpumFVyVTuPXp0L+ol4r6aH96qZf9sH6OhwpZeo54+LD0fm96oSbJLFz+xeM/TmpCirpSqf2JPsr3inVPl2cnh2aCuxtnN/Nhpmn3PQUWYtofRRD532TjsVJrX+bFhgO4tDWs3flHl1kqto79xLNORwulKFw2a5NonrFZn9NZNK3VmofrxzkVZStR1drVb0YkOH/5IuyvIqFVx/9nD46bTpNkvczSjtqduhg3yfcyGORXU4NOvBrjmEb4kQgnuBP73gvweYiq19hTBCSHzQnBcfhQqCwDvp/8HuhzjjibL/7c51HO25u5fwsF2mU77jbEhzb7A9I0h3q0UulUmcXRHcmZl+hAVCtjPefZuhq07W92baB3xey/g3dMq34VhSdXw6TyCOcoFDVA+R4YFEFj/uoGE1SsL28e3CQvrFvWszmaTi7pL4iR8LmamY/NYkZ6c3K3GUhbLY8v5p/mptYaxfcXgfowqzqOxm/cT0/yHDiHPijzJSTZiHb2cyzA9KReXH/g++Tbp8Wfz1W5PPL37/VgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPi9/gH7gDBYPxaZ2QAAAABJRU5ErkJggg=="
const bell = logo
const dropdown = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAARVBMVEX///8AAADd3d1TU1P8/PyampoaGhr09PT5+fmSkpIoKCiWlpYiIiLx8fHu7u6KiooQEBDl5eW3t7daWlqoqKgWFhagoKAfNIzlAAAB70lEQVR4nO3ZCXKCMBiG4bQFBBIkLnD/oxY7dVoxaoCszvucwG8S/iUKAQAAAAAAAAAAAAAAAAAAAAAAAAAA3k5x+AzgUAQJUx9PX96djnWQMGLffHjX7MNkEWJXVn6jVOUuVBbvaSoZMMuURmp/WYawWaY0Hr+bJnCWqUCXvrLIMEX5lqezaSJEmfQevhvdx8kynY1ynUVFOhdxqdCt2yxtyP4yt3ebpi2D9X1zGoc3TcXNIkQnB1dZBtnFzTL1m95VmD5Gf5lzlCZaTb7lZBaQsVNcNZtn6Cpef5nbyY01TYWek5/ptlVoVUavY/9tSpNYlstks3rq1DFnGLPVm/SQXhYh6nVpqjLQm9IytVwTJvyObKdY8d2UKcwwZotngYSzCLHwpqXT942WTDYJzTBmtf3uqZK+Yz+60TJNm1rfN7F8F4i879uyeheIvu/bsnhV16n2SoOXm3QiO7KdF+/QqdfkmWc3TSez71sqHm/SKsp/Fps8fIeO+p681oPu2Y4Z9Mp73WiY06o8s1zmtLsqoNPcK23U87MZ8s1ydzYZn8vFzSat05/5nyvGvzBj5lkm17PRZexf4sLvK8dbZJm+G5XFjmynHpUas65j/3Xnc6Z936R+m3MBAAAAAAAAAAAAAAAAAAAAAAAAACC8b6pRFTiHknw1AAAAAElFTkSuQmCC"
const header = () => {

   const toggleDropdown = () => {
      const dropdown = document.getElementById('dropdownContent');
      dropdown.classList.toggle('hidden');
    };

  return (
    <div className='container'>
      <nav className='bg-gray-800'>
           <div className='max-w-7xl mx-auto px-4'>
              <div className='flex items-center justify-between h-16' >
                 
                 <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                       <img className='w-32' src={accountLogo} alt="Logo" />
                    </div>
                    <div className='hidden md:block ml-4 text-sm'>
                      <a href="#" className="text-white px-2 py-2 hover:bg-gray-700 rounded">Home</a>
                      <a href="#" className="text-white px-2 py-2 hover:bg-gray-700 rounded">TV Shows</a>
                      <a href="#" className="text-white px-2 py-2 hover:bg-gray-700 rounded">Movies</a>
                      <a href="#" className="text-white px-2 py-2 hover:bg-gray-700 rounded">New & Popular</a>
                      <a href="#" className="text-white px-2 py-2 hover:bg-gray-700 rounded">My list</a>
                      <a href="#" className="text-white px-2 py-2 hover:bg-gray-700 rounded">Browse By Language</a>

                    </div>
                 </div>
                   
                   <div className="flex items-center">
                      <div className="ml-4">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="px-3 py-1 rounded bg-gray-700 text-white focus:outline-none"
                        />
                      </div>
                   </div>

                   <div className='m-2 text-white'>
                      Children
                   </div>
                    
                   <div className="mr-2">
                      <img className="w-10 h-10 " src={bell} alt="bell" />
                   </div>

                   <div className="">
                      <img className="w-8 h-8 " src={userAvatar} alt="User Avatar" />
                  </div>

                    <div className="ml-4 relative">
                      <button
                        onClick={toggleDropdown}
                        className="text-white focus:outline-none"
                      >
                        <img className='w-5 mt-3' src={dropdown}/>
                      </button>
                      {/* Dropdown Content */}

                      <select name="" id="dropdownContent">
                           <option className="block hover:bg-gray-700 py-1" value="1">Settings</option>
                           <option className="block hover:bg-gray-700 py-1" value="2">Profile</option>
                           <option className="block hover:bg-gray-700 py-1" value="3">Logout</option>
                      </select>

                      <div
                        id="dropdownContent"
                        className="hidden absolute right-0 mt-2 bg-gray-700 text-white p-2 rounded shadow-lg"
                      >
                        <a href="#" className="block hover:bg-gray-700 py-1">Settings</a>
                        <a href="#" className="block hover:bg-gray-700 py-1">Profile</a>
                        <a href="#" className="block hover:bg-gray-700 py-1">Logout</a>
                      </div>
                   </div>

              </div>
           </div>
      </nav>
    </div>
  )
}

export default header
 