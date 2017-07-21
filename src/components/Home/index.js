import React from 'react'

import Modal from '../../containers/Modal'
import Content from '../../containers/Content'
import TabBar from '../../containers/TabBar'

export default class Home extends React.Component {
    render() {
        return (
            <div id="main">
                <Modal>
                    <TabBar />
                    <Content />
                </Modal>
            </div>
        );
    }
}