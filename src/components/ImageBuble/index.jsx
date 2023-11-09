import React, { useState, useEffect } from 'react';
// import './styles.css';

const ImageBubble = () => {
    const [bubbles, setBubbles] = useState([]);

    // Generate random bubbles with unique key and animation delay
    const generateBubbles = () => {
        const numBubbles = 15;
        const bubbleArray = [];

        for (let i = 0; i < numBubbles; i++) {
            const key = i;
            const delay = Math.random() * 20 + 1; // Random delay between 1s and 6s
            bubbleArray.push({ key, delay });
        }

        setBubbles(bubbleArray);
    };

    useEffect(() => {
        generateBubbles();
    }, []);

    return (

        <div className="bubbles">

            <div className="bubble">
                {/* jumia */}
                <div className='after:rounded-xl after:shadow-sm border-4 rounded-full w-40 h-40' style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_DcsvDnzRlimiVk-vpeNOgWclqBdsJJlfua3VgBYiw&s")` }}></div>
            </div>

            <div className="bubble">
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeQxAErqaTHT3CP1uBdnZs8UY-mexBbFPXQaOli_1Bg&s" width={150} /> */}
                <div className='border-4 object-contain rounded-full w-42 h-42' style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeQxAErqaTHT3CP1uBdnZs8UY-mexBbFPXQaOli_1Bg&s")` }}></div>
            </div>

            <div className="bubble">
                <img src="https://static.wixstatic.com/media/af4a76_170dbc341f2d462884c99fcebf247880~mv2.png/v1/fill/w_800,h_450,al_c/jiji.png" width={150} />
            </div>

            <div className="bubble">
                <img src="https://i.pinimg.com/736x/94/40/9a/94409a7150c02d7658dd6e7ba88429b63.jpg" width={150} />
            </div>

            <div className="bubble">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRrdDhNpivp1OvR24rILTbTBl-q3ssyQAtwnvXQEb7A&s" width={150} />
            </div>

            <div className="bubble">
                <img src="" width={150} />
            </div>

            {/* <div className="bubble">
                <img src="https://group-live.jumia.is/images/press/3by2/logo-jumia-food.png" width={150} />
            </div> */}
            <div className="bubble">
                <div data-tooltip="Jumia Foods" className='border-4 object-contain rounded-full w-42 h-42' style={{ backgroundImage: `url("https://group-live.jumia.is/images/press/3by2/logo-jumia-food.png")` }}></div>
            </div>
            <div className="bubble">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirXe84Tdlpr_KodBJzuoC80km_3kiFzLuwoY9KkKgjw&s" width={150} />
            </div>
            <div className="bubble">
                <img src="https://media.premiumtimesng.com/wp-content/files/2021/03/favicon-02.png" width={150} />
            </div>
            <div className="bubble">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Gokada_logo.png" width={150} />
            </div>
            <div className="bubble">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Bolt_logo.png/1024px-Bolt_logo.png" width={150} />
            </div>
            <div className="bubble">
                <img src="https://freelogopng.com/images/all_img/1659761297uber-icon.png" width={150} />
            </div>

            <div className="bubble">
                <img src="data:image/png;base64,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" width={150} />
            </div>

            <div className="bubble">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAsVBMVEX4+Pj6/wAAAAD//wD4+P/4+Pr4+d35/WqAgQCanACnqgDZ3ACUlQD4+P22uQClpgD4+eS/wgDU2AD5+r74+O35/Hr5/XH6/jT5+7T6/kj5/JL09wD5+6L5/VP4+sf5+63l6QB3eAD4+Oo6PABLSwCPkADP0QBWVwD5+6f5/Hz5/JP6/WPg5ACKiwDp7QBubwBFRgAKCgA1NQAkJQDFyABmZwAXGAAfHwApKwCyswBSUgDRHNOeAAAElUlEQVR4nO2dfVfaMBSHCUmdUF6KoE7rFHyfoE7Ebez7f7C1NC8ltI6dS8M56e/5q+VCD31OQm5uOUmjAQAAAAAAAAAAAAAAAAAAAMBeCIjs+/vvi6ArhOiOogMS0Wh1mZpZDIS4Hp5PT9kOOJ2eD6+FqI/BQIwuznZhznB2MaqLQBGd7NZdxkkk9n1nDug2jquQl3KcXNxzxLAqeSlDzxugOK/SHmPnXvsTX6q1x9gXj/2JadX2fPYnKhlxbU489ScuXNhj7MJLf8GBG3uMHfiYQIudTNG24dTD5ieuXNlj7Mo/f4E7e4x513u7X13q++rb7E3suMTyOWee9V53w26GZ4Ovq5xP4VnuJ7651ffNL31Ox90UrzpvELnWF/nkr3vpWt+lT6lL1+GUI+PKJ31VF5k38ars7KbSl+cY+ih4VTSt/hmHjVc1e+gjAX0koI8E9JGAPhLQRwL6SEAfia308YxPQoUx6FsRDjJmBaFeRri9v7rp48/NjP6GI96XoQ70leq7k47a5fpa0Ad9/w/0kYA+EjsaOqCvnPFRxsumWejb4o5LU+NP9ZV8ynN9fJ0iEfp8U595axzOUkK7zfqtbxyuEzP2Ig+lCB63X3/c3E4GiSZLH4+Xq1Av0biUoQmvkT4+aa7T49bQoQfi5tvC0sdbuY/15NFhrfQdWvqSNtbJJy7xPB9UTSzTd5sLtQfQt6mPz9ei6t2pPn5bGII+o28jbPTleu66RujT+sbFilJ9cUkI+rQ+E31fzsaLh5w+0/je2rPx/UfN9b22Oil3Icvr+ykP50lmwnI2E3038vBXvAp16q1vYHJjo2+mnBzJPO9N69N9dyFD81rr6+m7zulTychvGdQpYYvfK33qU33os/UpJa9K30DrU1nyrQrdQ5+tT004nm1HLd62zLIZ9JXpu1P6jrQ+u2HqHAf6tL6OpYQvNlrfhwqF0GfrU03sQTlqa33qt+/G/lmEPq1PKWnGMvSg9alu3FRlrQn02fr0nE0WqEJzrvO+TBd/WT+HvnTW8a6kLNOUOlRZczrr+JE150nym3wl9Rp+eijXnk8NcgSpR1tYn150PDPyYEfVpfaVkl7cwlIegz+vTYK1GtLK339dZDqm1Cn9HH+Ede0atJXOxa1wMSlwJ9a8+SPnSRbzUSm4dI6dS33o+KcvqUFfmk7V52y189M5SoREbmgW/JKFNLfeYpeelLnMeDfn85W9UCN0KLdn8ZFoRqom8rPvk78z//6Qx9JKAP+hTQRwL6SEAfCegjAX0koI8E9JGAPhLQRwL6SEAfCegjAX0ksIIaCazfRwKrR5LA2qUksHIuCazbTAOrhpPAmvUksGMCCdf7dfj104fdYohgryIa2CmLBPZpo4FdAklgj0oa4tGNvUcfG18D+/NScVGz96pKb4G9yWlUXXb2qshcgKi0cHrpub1k9tb4XpW87w3v5moFiKiSEfgk8r7pZQRi9LjjAszZ40h4mSwXEghxPXya7mQadzp9Gl6LGslbEXSFEN1RdEAiGq0uUzN3hoDIvr8/AAAAAAAAAAAAAAAAAAAAqCt/AcyDcenoCTCdAAAAAElFTkSuQmCC" width={150} />
            </div>

            <div className="bubble">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAsVBMVEX4+Pj6/wAAAAD//wD4+P/4+Pr4+d35/WqAgQCanACnqgDZ3ACUlQD4+P22uQClpgD4+eS/wgDU2AD5+r74+O35/Hr5/XH6/jT5+7T6/kj5/JL09wD5+6L5/VP4+sf5+63l6QB3eAD4+Oo6PABLSwCPkADP0QBWVwD5+6f5/Hz5/JP6/WPg5ACKiwDp7QBubwBFRgAKCgA1NQAkJQDFyABmZwAXGAAfHwApKwCyswBSUgDRHNOeAAAElUlEQVR4nO2dfVfaMBSHCUmdUF6KoE7rFHyfoE7Ebez7f7C1NC8ltI6dS8M56e/5q+VCD31OQm5uOUmjAQAAAAAAAAAAAAAAAAAAAMBeCIjs+/vvi6ArhOiOogMS0Wh1mZpZDIS4Hp5PT9kOOJ2eD6+FqI/BQIwuznZhznB2MaqLQBGd7NZdxkkk9n1nDug2jquQl3KcXNxzxLAqeSlDzxugOK/SHmPnXvsTX6q1x9gXj/2JadX2fPYnKhlxbU489ScuXNhj7MJLf8GBG3uMHfiYQIudTNG24dTD5ieuXNlj7Mo/f4E7e4x513u7X13q++rb7E3suMTyOWee9V53w26GZ4Ovq5xP4VnuJ7651ffNL31Ox90UrzpvELnWF/nkr3vpWt+lT6lL1+GUI+PKJ31VF5k38ars7KbSl+cY+ih4VTSt/hmHjVc1e+gjAX0koI8E9JGAPhLQRwL6SEAfia308YxPQoUx6FsRDjJmBaFeRri9v7rp48/NjP6GI96XoQ70leq7k47a5fpa0Ad9/w/0kYA+EjsaOqCvnPFRxsumWejb4o5LU+NP9ZV8ynN9fJ0iEfp8U595axzOUkK7zfqtbxyuEzP2Ig+lCB63X3/c3E4GiSZLH4+Xq1Av0biUoQmvkT4+aa7T49bQoQfi5tvC0sdbuY/15NFhrfQdWvqSNtbJJy7xPB9UTSzTd5sLtQfQt6mPz9ei6t2pPn5bGII+o28jbPTleu66RujT+sbFilJ9cUkI+rQ+E31fzsaLh5w+0/je2rPx/UfN9b22Oil3Icvr+ykP50lmwnI2E3038vBXvAp16q1vYHJjo2+mnBzJPO9N69N9dyFD81rr6+m7zulTychvGdQpYYvfK33qU33os/UpJa9K30DrU1nyrQrdQ5+tT004nm1HLd62zLIZ9JXpu1P6jrQ+u2HqHAf6tL6OpYQvNlrfhwqF0GfrU03sQTlqa33qt+/G/lmEPq1PKWnGMvSg9alu3FRlrQn02fr0nE0WqEJzrvO+TBd/WT+HvnTW8a6kLNOUOlRZczrr+JE150nym3wl9Rp+eijXnk8NcgSpR1tYn150PDPyYEfVpfaVkl7cwlIegz+vTYK1GtLK339dZDqm1Cn9HH+Ede0atJXOxa1wMSlwJ9a8+SPnSRbzUSm4dI6dS33o+KcvqUFfmk7V52y189M5SoREbmgW/JKFNLfeYpeelLnMeDfn85W9UCN0KLdn8ZFoRqom8rPvk78z//6Qx9JKAP+hTQRwL6SEAfCegjAX0koI8E9JGAPhLQRwL6SEAfCegjAX0ksIIaCazfRwKrR5LA2qUksHIuCazbTAOrhpPAmvUksGMCCdf7dfj104fdYohgryIa2CmLBPZpo4FdAklgj0oa4tGNvUcfG18D+/NScVGz96pKb4G9yWlUXXb2qshcgKi0cHrpub1k9tb4XpW87w3v5moFiKiSEfgk8r7pZQRi9LjjAszZ40h4mSwXEghxPXya7mQadzp9Gl6LGslbEXSFEN1RdEAiGq0uUzN3hoDIvr8/AAAAAAAAAAAAAAAAAAAAqCt/AcyDcenoCTCdAAAAAElFTkSuQmCC" width={150} />
            </div>
        </div>

    );
};

export default ImageBubble;