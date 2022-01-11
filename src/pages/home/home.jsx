import React from 'react';
import Header from '../../components/header/header';
import AddTask from '../../components/add-task/AddTask';
import ListTask from '../../components/list-task/ListTask';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {title: '#TODO',activeTab: null};
    }

    onClickHandle = (activeTab) => {
        this.setState({
            activeTab: activeTab
        });
    }


    render(){
        return(
            <>
                <Header/>
                <div className='tabs'>
                    <ul className='tab-nav'>
                        <li 
                        className={ (this.state.activeTab == null || this.state.activeTab == 'all-task') && 'tab-active' } 
                        onClick={() => this.onClickHandle('all-task')}>
                            All
                        </li>
                        <li 
                        className={ (this.state.activeTab == 'active-task') && 'tab-active' } 
                        onClick={() => this.onClickHandle('active-task')}>
                            Active
                        </li>
                        <li 
                        className={ (this.state.activeTab == 'completed-task') && 'tab-active' } 
                        onClick={() => this.onClickHandle('completed-task')}>
                            Completed
                        </li>
                    </ul>
                    <div className='tab-content'>
                        <AddTask />
                        <ListTask filter={this.state.activeTab} />
                    </div>
                </div>
            </>
        );
    }
}

export default Home;