import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from "react-router-dom";

function Paginator(props) {
    const { totalPages } = props;
    const [url, setUrl] = useState("")
    const [pageInt, setPageInt] = useState(0)
    let { page } = useParams();
    let location = useLocation();

    useEffect(() => {

        function getUrlAndPage() {
            let url = location.pathname;
            var lastIndex = url.lastIndexOf("/");
            if (!page) {
                setPageInt(parseInt(1))
                setUrl(`${url}/`);
            } else {
                setUrl(url.slice(0, lastIndex + 1));
                setPageInt(parseInt(page))
            }
        }

        getUrlAndPage()

    }, [location.pathname, page]);

    return (
        <nav >
            <ul className="pagination justify-content-center">
                {pageInt > 1 && <li className="page-item">
                    <Link to={`${url}1`} className="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </Link>
                </li>}
                {pageInt > 1 && <li className="page-item"><Link to={`${url}${pageInt - 1}`} className="page-link" >{pageInt - 1}</Link></li>}
                <li className="page-item"><Link to={`${url}${pageInt}`} className="page-link" ><b>{pageInt}</b></Link></li>
                {pageInt < parseInt(totalPages) && <li className="page-item"><Link to={`${url}${pageInt + 1}`} className="page-link" >{pageInt + 1}</Link></li>}
                {pageInt < parseInt(totalPages) && <li className="page-item">
                    <Link to={`${url}${parseInt(totalPages)}`} className="page-link" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </Link>
                </li>}
            </ul>
        </nav>
    );
}

export default Paginator;