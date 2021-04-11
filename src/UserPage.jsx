import React, { useState } from 'react';
import Spinner from './Spinner';
import useFetch from './CustomHook/useFetch';
import { useParams, useNavigate } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import { Link } from 'react-router-dom';

export default function UserPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [count, setCount] = useState(parseInt(id));
  if ((count > 10) | (count < 1)) {
    navigate(`/`);
  }
  const { data: detail, loading, error } = useFetch('users/' + count);

  if (error) throw error;
  if (loading) return <Spinner />;
  if (detail.length === 0) return <PageNotFound />;

  const { name, username, email, phone, company, website, address } = detail;

  return (
    <React.Fragment>
        <div className="user-detail">
          <p>-name: {name}</p>
          <p>-username: @{username}</p>
          <p>-email: {email}</p>
          <p>-phone: {phone}</p>
          <p>-company: {company.name}</p>
          <p>-website: {website}</p>
          <p>-address: </p>
          <ul className="address-list">
            <li> street: {address.street}</li>
            <li> suite: {address.suite}</li>
            <li> city: {address.city}</li>
            <li> zipcode: {address.zipcode}</li>
          </ul>
        </div>
        <div className="user-button">
          <div>
            <button
              className="btn btn-primary"
              onClick={() => {
              navigate(`/users/${count - 1}`);
              setCount(count - 1);
              }}
            >Previous
            </button>
          </div>

          <div>
            <Link to="/">
              <button className="btn btn-primary">Home</button>
            </Link>
          </div>

          <div>
            <button
              className="btn btn-primary"
              onClick={() => {
              navigate(`/users/${count + 1}`);
              setCount(count + 1);
              }}
            >Next
            </button>
          </div>
        </div>
    </React.Fragment>
  );
}
