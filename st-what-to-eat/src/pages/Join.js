import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Join() {
    const navigate = useNavigate()
    let [fade, setFade] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({ nickname: '', username: '', password: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        await axios
            .post('/join', {
                nickname: formData.nickname,
                username: formData.username,
                password: formData.password,
            }).then(()=>{
                navigate('/login')
            })
            .catch((error) => {
                setErrorMessage(error.response.data);
            });
    };

    useEffect(() => {
        setTimeout(() => {
            setFade('end');
        }, 300);

        return () => {
            setFade('');
        };
    }, []);

    return (
        <div id="join" className="first center">
            <form className={'form-box start ' + fade} onSubmit={handleSubmit}>
                <h2>Join</h2>
                <input name="nickname" placeholder="nickname" value={formData.nickname} onChange={handleInputChange} />
                <input name="username" placeholder="id" value={formData.username} onChange={handleInputChange} />
                <input
                    name="password"
                    placeholder="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <button type="submit" class="login">
                    Join
                </button>
                <p>{errorMessage}</p>
            </form>
        </div>
    );
}

export default Join;
