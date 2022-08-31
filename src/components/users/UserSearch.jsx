import React from 'react';
import { useState , useContext } from 'react'; 
import GithubContext from '../../context/github/GithubContext';

function UserSearch() {

    const [text, setText] = useState("");
    const {users , searchUsers , clearUsers} = useContext(GithubContext);

    const handleChange = (e) => setText(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // validation
        if(text === ''){
            alert('Please Enter Something');
        }
        else{
            // search Users
            searchUsers(text);
            setText('');
        }
    }

    const handleClick = () => {
        clearUsers();
    }

    const clearBtn = <button className="btn btn-ghost btn-lg" onClick={handleClick}>
                            Clear
                    </button>

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-6 gap-8'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input 
                                type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" 
                                placeholder='Search Github User'
                                value={text}
                                onChange={handleChange}
                            />
                            <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                                GO
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                {users.length > 0 && clearBtn}
            </div>
        </div>
    )
}

export default UserSearch;