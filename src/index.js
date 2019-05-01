import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
class App extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div className="ui container comments">
                <ApprovalCard>
                    <h4>Warning!!!</h4>
                    <div>Are you sure you want to do this?</div>
                </ApprovalCard>
                <ApprovalCard>
               <CommentDetail author="Sam" date="6:00 PM" blogText="Nice blog post!!!" avatar={faker.image.avatar()}/>
                </ApprovalCard>
                <ApprovalCard>
                <CommentDetail author="Monika" date="11:00 PM" blogText="No it is not fine!!!" avatar={faker.image.avatar()}/>
                </ApprovalCard>
                    <ApprovalCard>
                    <CommentDetail author="Zorro" date="5:00 PM" blogText="Long text for purpose of limit the space" avatar={faker.image.avatar()}/>
                    </ApprovalCard>
            </div>
        );
    }
}

ReactDOM.render(<App />,
    document.querySelector('#root')
);