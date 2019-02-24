import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import Comment from './Comment';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comment
          src={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 4:45PM"
          text="Nice blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          src={faker.image.avatar()}
          author="Alex"
          timeAgo="Today at 2:00AM"
          text="Lovely blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          src={faker.image.avatar()}
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          text="Terrible blog post!"
        />
      </ApprovalCard>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'))