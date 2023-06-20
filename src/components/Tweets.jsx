import React, { memo, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Banner from './Banner';
import NewTweetForm from './NewTweetForm';
import TweetCard from './TweetCard';
import { useAuth } from '../context/AuthContext';

const Tweets = memo(({ tweetService, username, addable }) => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState('');
  const history = useHistory();
  const { user } = useAuth();
  useEffect(() => {
    tweetService
      .getTweets(username)
      .then((tweets) => setTweets([...tweets]))
      .catch(onError);

    const stopSync = tweetService.onSync((message) => onChange(message));
    return () => stopSync();
  }, [tweetService, username, user]);

  const onChange = (message) => {
    const command = message.command;
    switch (command) {
      case 'create':
        setTweets((tweets) => [message.tweet, ...tweets]);
        break;
      case 'update':
        setTweets((tweets) =>
          tweets.map((item) =>
            item.id === message.updated.id ? message.updated : item
          )
        );
        break;
      case 'delete':
        setTweets((tweets) => {
          return tweets.filter((tweet) => tweet.id !== Number(message.id));
        });
        break;
      default:
        console.log('something went wrong 👶🏻');
        break;
    }
  };

  const onUsernameClick = (tweet) => history.push(`/${tweet.username}`);

  const onError = (error) => {
    setError(error.toString());
    setTimeout(() => {
      setError('');
    }, 3000);
  };

  return (
    <>
      {addable && (
        <NewTweetForm tweetService={tweetService} onError={onError} />
      )}
      {error && <Banner text={error} isAlert={true} transient={true} />}
      {tweets.length === 0 && <p className='tweets-empty'>No Tweets Yet</p>}
      <ul className='tweets'>
        {tweets.map((tweet) => (
          <TweetCard
            key={tweet.id}
            tweet={tweet}
            onError={onError}
            tweetService={tweetService}
            owner={tweet.username === user.username}
            onUsernameClick={onUsernameClick}
          />
        ))}
      </ul>
    </>
  );
});
export default Tweets;
