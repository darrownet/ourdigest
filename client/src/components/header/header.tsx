import React, {useContext} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ServiceContext} from "../../core/contexts/service-context";
import {AppState} from "../../core/actions/app/app-action-creators";

export type HeaderProps = {
    title: string;
}

const Header: React.FC<HeaderProps> = ({title}: HeaderProps) => {

    const actions = useContext(ServiceContext).actions;
    const dispatch = useDispatch();
    const totalBTC = useSelector((state:AppState) => state.foo) || 0;

    const onBtnClick = () => {
        dispatch(actions.asyncDataRequest({foo:'bar'}));
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            {totalBTC > 0 ?
                <p>There are {totalBTC} total Bitcoin available in the Bitcoin Monetary Network</p> :
                <p>How may Bitcoins are available in the Bitcoin Monetary Network?</p>
            }
            <button onClick={onBtnClick}>tell me...</button>
        </header>
    );
};

export default Header;
