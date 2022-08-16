import img2 from './img/spring2.jpg'

const Content = () => {
  return (
    <div>
        <h2 style= {{color: "red"}} >React JS</h2>
        <p style= {{ backgroundColor:"lightgreen" }}>
            React, kullanıcı arabirimi tasarlamak için kullanılan bir JS kütüphanesidir.
        </p>
        <img src={img2} alt="img2" />
    </div>
  )
}

export default Content;