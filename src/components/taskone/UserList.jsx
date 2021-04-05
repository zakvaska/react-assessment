import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fetch from 'node-fetch';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #000;
  padding: 20px;
  
  span {
    display: block;
    margin-bottom: 5px;
  }
`;

const UserInfo = styled.div`
  border-right: 1px solid #000;
  text-align: left;
  width: 260px;
`;

export const Users = styled.div`
  max-height: 300px;
  overflow: scroll;
  margin-top: 15px;
`;

const debounce = (func, wait = 5000) => {
  let timeout = null;

  const cleanup = () => {
    if (timeout) clearTimeout(timeout);
  };

  return () => {
    cleanup();

    timeout = setTimeout(func, wait);
  };
};

export const UserList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [value, setValue] = useState('');

  const fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users${filter ? `?username=${encodeURIComponent(filter)}` : ''}`).then(async (response) => {
      const newData = await response.json();
      setData(newData);
    });
  };

  useEffect(() => {
    fetchData();
  }, [filter]);

  const fetchNewData = (e) => {
    setFilter(e.target.value);
  };

  const changeValue = (e) => {
    setValue(e.target.value);
    const debounceFn = debounce(fetchNewData.bind(null, e));
    debounceFn();
  };

  return (
    <div>
      <div>
        Filter:
        <input
          type="text"
          onChange={changeValue}
          value={value}
          placeholder="Enter username"
        />
      </div>
      <Users data-testid="users">
        {data.map((user) => (
          <Row key={user.id}>
            <UserInfo>
              <span>{`Name: ${user.name}`}</span>
              <span>{`Username: ${user.username}`}</span>
            </UserInfo>
            <div>
              <div>
                <span>{user.address.street}</span>
                <span>{user.address.suite}</span>
                <span>{user.address.city}</span>
                <span>{user.address.zipcode}</span>
              </div>
              <div>
                <span>{user.email}</span>
                <span>{user.phone}</span>
              </div>
            </div>
          </Row>
        ))}
      </Users>
    </div>
  );
};
