import React from "react";

function Selection(props) {

  let { mouseX, mouseY, imgWidth, imgHeight, mousePageX, mousePageY } = props.selectionProp

  let characters = props.characters
  let setCharacters = props.setCharacters
  let setShowSelection = props.setShowSelection
  let setFoundCircles = props.setFoundCircles

  // console.log(props.selectionProp)

  const submit = async (e, val) => {
    // call BackEnd to check
    let xCoord = mouseX / imgWidth
    let yCoord = mouseY / imgHeight

    let res = await fetchRes(val, xCoord, yCoord)

    if (res) {
      // alert('You found it', val)
      setCharacters(characters.filter(v => v != val))
      setFoundCircles(prev => [...prev, [val, xCoord, yCoord]])
    }

    setShowSelection(false)

  }

  const fetchRes = async (val, x, y) => {
    const myHeaders = new Headers();
    const token = document.querySelector('meta[name="csrf-token"]').content;
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-CSRF-Token", token);

    const response = await fetch(`api/v1/guess`, {  
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({ val, x, y }),
    });

    let data = await response.json()
    console.log(data)
    if (data && data.res)
      return data.res

    return false
  }


  return (
    <div className='d-flex flex-column position-fixed bg-dark p-1 rounded' style={{ left: mousePageX, top: mousePageY }}>
      {characters.map(val =>
        <button key={val} type="button" className="btn btn-secondary m-0 p-0 py-1" onClick={(e) => submit(e, val)}>
          <img src={`/images/chr0${val}.png`} alt="" className="w-75 rounded" />
        </button>
      )}
    </div>
  )
}

export default Selection
