import React from "react";
import styles from "./ProfileInfo.module.css"
import Loading from "../../../Loader/Loader";

class ProfileInfo extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({status:this.props.status})
        }
    }

    state ={
        editMode:false,
        status : this.props.status || 'status'
    }
    editMode = () =>{
        this.setState({editMode:true})
    }
    deactivetedEditMode = () =>{
        this.setState({editMode:false})
        this.props.updateStatus(this.state.status)
    }
    changeStatus = (e) =>{
        this.setState({status:e.currentTarget.value})
    }
    render() {
        if (!this.props.profile) {
            return <Loading/>
        }
        let img = this.props.profile.photos.large ? this.props.profile.photos.large : "https://placekitten.com/200/260"
        return (
            <div className={styles.wrap}>
                <div className={styles.info}>
                    <img src={img} alt="info"/>
                </div>
                <div className={styles.desc}>
                    <div>{this.props.profile.fullName}</div>
                    <div>{this.props.profile.aboutMe}</div>
                    <div>{this.state.editMode ?
                        <input autoFocus={true}
                               onBlur={this.deactivetedEditMode}
                               value={this.state.status}
                        onChange={this.changeStatus}/>
                        :<span onDoubleClick={this.editMode}>{this.state.status}</span>}
                    </div>
                </div>

            </div>
        )
    }
}

export default ProfileInfo