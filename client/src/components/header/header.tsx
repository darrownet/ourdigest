import React, {useContext} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ServiceContext} from "../../core/contexts/service-context";

export type HeaderProps = {
    title: string;
}

const Header: React.FC<HeaderProps> = ({title}: HeaderProps) => {

    const actions = useContext(ServiceContext).actions;
    const dispatch = useDispatch();

    const onBtnClick = () => {
        dispatch(actions.asyncDataRequest({foo:'bar'}))
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <button onClick={onBtnClick}>test data call</button>
        </header>
    );
};

export default Header;
