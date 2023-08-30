import "./miorg.css"
const MiOrg = (props) =>{

    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="img/btn_add.png" alt="btn add" onClick={props.showForm}></img>
    </section>
}
export default MiOrg